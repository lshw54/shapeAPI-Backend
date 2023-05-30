import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from './base.entity';

/**
 * Cat Entity
 */
@Entity({ name: 'cat' })
export class CatEntity extends BaseEntity {
  @Column({ type: 'varchar', length: 255, nullable: true, comment: 'Type' })
  catType: string;

  @Column({ type: 'varchar', length: 255, nullable: true, comment: 'Name' })
  catName: string;

  @Column({ type: 'varchar', length: 255, nullable: true, comment: 'Images' })
  url: string;

  @Column({ type: 'varchar', length: 255, nullable: true, comment: 'Remarks' })
  remark: string;
}
