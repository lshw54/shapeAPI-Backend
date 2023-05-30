import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminModule } from './module/admin/admin.module';
import { UserEntity } from './entity/user.entity';
import { HttpModule } from '@nestjs/axios';
import { CatEntity } from './entity/cat.entity';
import { CollectEntity } from './entity/collect.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'cat',
      entities: [UserEntity, CatEntity, CollectEntity],
      synchronize: true,
      timezone: '+08:00',
    }),
    AdminModule,
    HttpModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
