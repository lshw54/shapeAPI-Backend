import { Module } from '@nestjs/common';
import { CatController } from './cat/cat.controller';
import { CatService } from './cat/cat.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserEntity } from '../../entity/user.entity';
import { HttpModule } from '@nestjs/axios';
import { CatEntity } from '../../entity/cat.entity';
import { CollectController } from './collect/collect.controller';
import { CollectService } from './collect/collect.service';
import { CollectEntity } from '../../entity/collect.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity, CatEntity, CollectEntity]),
    HttpModule,
  ],
  controllers: [UserController, CatController, CollectController],
  providers: [UserService, CatService, CollectService],
})
export class AdminModule {}
