import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { CatEntity } from '../../../entity/cat.entity';
import { UpdateCatRequest } from './cat.dto';

@Injectable()
export class CatService {
  constructor(
    @InjectRepository(CatEntity)
    private catsRepository: Repository<CatEntity>,
  ) {}

  async create(dto: CatEntity): Promise<InsertResult | null> {
    return this.catsRepository.insert(dto);
  }

  async delete(ids: number[]): Promise<DeleteResult | null> {
    return this.catsRepository.delete(ids);
  }

  async update(dto: UpdateCatRequest): Promise<UpdateResult | null> {
    return this.catsRepository.update({ id: dto.id }, dto);
  }

  async select(dto: CatEntity): Promise<CatEntity[] | null> {
    return this.catsRepository.find({});
  }
}
