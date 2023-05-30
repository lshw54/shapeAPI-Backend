import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, Repository } from 'typeorm';
import { UserEntity } from '../../../entity/user.entity';
import { isEmpty } from 'lodash';
import { ApiException } from '../../../common/exception/api.exception';
import { ErrorEnum } from '../../../common/constant/error';
import { LoginRequest } from './user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  async create(dto: UserEntity): Promise<InsertResult | null> {
    const user = await this.usersRepository.findOneBy({
      userName: dto.userName,
    });
    if (user) {
      throw new ApiException(ErrorEnum.CODE_1018);
    }
    return this.usersRepository.insert(dto);
  }

  async login(req: LoginRequest): Promise<UserEntity | null> {
    const user = await this.usersRepository.findOneBy({
      userName: req.username,
    });
    if (isEmpty(user)) {
      throw new ApiException(ErrorEnum.CODE_1003);
    }
    if (req.password != user.password) {
      throw new ApiException(ErrorEnum.CODE_1003);
    }
    delete req.password;
    return user;
  }

  async select(dto: UserEntity): Promise<UserEntity[] | null> {
    return this.usersRepository.find();
  }
}
