import {
  Body,
  Controller,
  Get,
  Post,
  Session,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserRequest, LoginRequest } from './user.dto';
import { UserEntity } from '../../../entity/user.entity';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ApiException } from '../../../common/exception/api.exception';
import { ErrorEnum } from '../../../common/constant/error';
import { AuthGuard } from '../../../common/guard/auth.guard';

/**
 * User Controller
 */
@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  /**
   * Register
   * @param req CreateUserRequest
   * @returns InsertResult
   */
  @Post('register')
  @ApiOperation({ summary: 'Register' })
  async register(@Body() req: CreateUserRequest) {
    if (req.password1 != req.password2) {
      throw new ApiException(ErrorEnum.CODE_1003);
    }

    const entity = new UserEntity();
    entity.userName = req.username;
    entity.password = req.password1;
    if (req.resigterCode != null && req.resigterCode !== '') {
      // TODO: Verify the correctness of the Resigter code
      entity.resigterCode = req.resigterCode;
      entity.userType = '1';
    }
    console.info(entity);
    return this.userService.create(entity);
  }

  /**
   * User Login
   * @param req LoginRequest
   * @returns UserEntity
   */
  @Post('login')
  @ApiOperation({ summary: 'User Login' })
  async login(
    @Session() session: Record<string, any>,
    @Body() req: LoginRequest,
  ): Promise<UserEntity | null> {
    const user = this.userService.login(req);
    user.then((item) => (session.user = item));
    return user;
  }

  /**
   * Query all users
   * @param req LoginRequest
   * @returns UserEntity
   */
  @Get()
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: 'Query' })
  async select(): Promise<UserEntity[] | null> {
    const users = this.userService.select(null);
    return users;
  }
}
