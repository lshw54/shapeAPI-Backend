import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export abstract class BaseEntity {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id', comment: 'Primary Key' })
  id!: number;

  @Column({ type: 'tinyint', default: 1, comment: 'Status 0-Invalid 1-Valid' })
  status!: number;

  @CreateDateColumn({
    type: 'timestamp',
    comment: 'Creation time',
    name: 'created_at',
    nullable: true,
  })
  createdAt!: Date;

  @Column({ type: 'varchar', length: 255, nullable: true })
  createdBy: string;

  @UpdateDateColumn({
    type: 'timestamp',
    comment: 'Update time',
    name: 'updated_at',
    nullable: true,
  })
  updatedAt!: Date;

  @Column({ type: 'varchar', length: 255, nullable: true })
  updatedBy: string;
}
