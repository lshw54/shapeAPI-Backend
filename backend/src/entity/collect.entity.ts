import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from './base.entity';

/**
 * Collect Entity
 */
@Entity({ name: 'collect' })
export class CollectEntity extends BaseEntity {
  @Column({ type: 'bigint' })
  userId: number;

  @Column({ type: 'bigint' })
  catId: number;
}
