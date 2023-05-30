import { IsNumberString } from 'class-validator';

export class FindOneParams {
  @IsNumberString()
  id: number;
}

import { ApiProperty } from '@nestjs/swagger';

export class ResOp<T = any> {
  @ApiProperty({ type: 'object' })
  data?: T;

  @ApiProperty({ type: 'number', default: 200 })
  code: number;

  @ApiProperty({ type: 'string', default: 'success' })
  message: string;

  constructor(code: number, data: T, message = 'success') {
    this.code = code;
    this.data = data;
    this.message = message;
  }

  static success<T>(data?: T, message?: string) {
    return new ResOp(200, data, message);
  }

  static error(code: number, message) {
    return new ResOp(code, {}, message);
  }
}

/**
 * @deprecated use nestjs-typeorm-paginate instead
 */
export class PageResult<T> {
  @ApiProperty()
  items?: Array<T>;

  @ApiProperty()
  total: number;
}

export class TreeResult<T> {
  @ApiProperty()
  id: number;

  @ApiProperty()
  parentId: number;

  @ApiProperty()
  children?: TreeResult<T>[];
}
