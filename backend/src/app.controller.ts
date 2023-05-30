import { Controller, Get, Session } from '@nestjs/common';
import { AppService } from './app.service';
import { UserEntity } from './entity/user.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

}
