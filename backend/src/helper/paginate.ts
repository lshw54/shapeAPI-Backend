import {
  IPaginationMeta,
  ObjectLiteral,
  Pagination,
  PaginationTypeEnum,
  IPaginationOptions as _IPaginationOptions,
  paginate as _paginate,
  paginateRaw as _paginateRaw,
  paginateRawAndEntities as _paginateRawAndEntities,
} from 'nestjs-typeorm-paginate';

import {
  FindManyOptions,
  FindOptionsWhere,
  Repository,
  SelectQueryBuilder,
} from 'typeorm';

// convert pageSize to limit
interface IPaginationOptions<T>
  extends Omit<_IPaginationOptions<T>, 'page' | 'limit'> {
  /**
   * @default 1
   * the page that is requested
   */
  page: number | string;
  /**
   * @default 10
   * the amount of items to be requested per page
   */
  pageSize: number | string;
}

export async function paginate<
  T extends ObjectLiteral,
  CustomMetaType = IPaginationMeta,
>(
  repository: Repository<T>,
  options: IPaginationOptions<CustomMetaType>,
  searchOptions?: FindOptionsWhere<T> | FindManyOptions<T>,
): Promise<Pagination<T, CustomMetaType>>;
export async function paginate<T, CustomMetaType = IPaginationMeta>(
  queryBuilder: SelectQueryBuilder<T>,
  options: IPaginationOptions<CustomMetaType>,
): Promise<Pagination<T, CustomMetaType>>;

export async function paginate<
  T extends ObjectLiteral,
  CustomMetaType = IPaginationMeta,
>(
  repositoryOrQueryBuilder: Repository<T> | SelectQueryBuilder<T>,
  options: IPaginationOptions<CustomMetaType>,
  searchOptions?: FindOptionsWhere<T> | FindManyOptions<T>,
) {
  return repositoryOrQueryBuilder instanceof Repository
    ? _paginate<T, CustomMetaType>(
        repositoryOrQueryBuilder,
        {
          page: options.page,
          limit: options.pageSize,
          paginationType:
            options.paginationType || PaginationTypeEnum.TAKE_AND_SKIP,
          ...options,
        },
        searchOptions,
      )
    : _paginate<T, CustomMetaType>(repositoryOrQueryBuilder, {
        page: options.page,
        limit: options.pageSize,
        paginationType:
          options.paginationType || PaginationTypeEnum.TAKE_AND_SKIP,
        ...options,
      });
}

export async function paginateRaw<
  T,
  CustomMetaType extends ObjectLiteral = IPaginationMeta,
>(
  queryBuilder: SelectQueryBuilder<T>,
  options: IPaginationOptions<CustomMetaType>,
): Promise<Pagination<T, CustomMetaType>> {
  return _paginateRaw(queryBuilder, {
    page: options.page,
    limit: options.pageSize,
    paginationType: options.paginationType || PaginationTypeEnum.TAKE_AND_SKIP,
    ...options,
  });
}

export async function paginateRawAndEntities<
  T,
  CustomMetaType = IPaginationMeta,
>(
  queryBuilder: SelectQueryBuilder<T>,
  options: IPaginationOptions<CustomMetaType>,
): Promise<[Pagination<T, CustomMetaType>, Partial<T>[]]> {
  return _paginateRawAndEntities(queryBuilder, {
    page: options.page,
    limit: options.pageSize,
    paginationType: options.paginationType || PaginationTypeEnum.TAKE_AND_SKIP,
    ...options,
  });
}
