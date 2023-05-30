import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from './base.entity';

/**
 * User entities
 */
@Entity({ name: 'user' })
export class UserEntity extends BaseEntity {
  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
    default: '0',
    comment: 'User Type 0-General 1-Staff',
  })
  userType: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  userName: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  password: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  resigterCode: string;
}
