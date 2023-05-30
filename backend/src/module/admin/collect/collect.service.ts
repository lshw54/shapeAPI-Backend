import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, InsertResult, Repository } from 'typeorm';
import { UserEntity } from '../../../entity/user.entity';
import { CollectEntity } from '../../../entity/collect.entity';

@Injectable()
export class CollectService {
  constructor(
    @InjectRepository(CollectEntity)
    private collectsRepository: Repository<CollectEntity>,
  ) {}

  async create(dto: CollectEntity): Promise<InsertResult | null> {
    const cat = await this.collectsRepository.findOneBy({
      catId: dto.catId,
      userId: dto.userId,
    });
    if (cat) {
      // Already bookmarked, no need to repeat bookmark, default success
      return;
    }
    return this.collectsRepository.insert(dto);
  }

  async delete(ids: number[]): Promise<DeleteResult | null> {
    return this.collectsRepository.delete(ids);
  }

  async select(dto: UserEntity): Promise<CollectEntity[] | null> {
    return this.collectsRepository.find({ where: { userId: dto.id } });
  }
}
