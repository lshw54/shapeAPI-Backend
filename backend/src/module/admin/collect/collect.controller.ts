import {
  Body,
  Controller,
  Get,
  Post,
  Delete,
  Session,
  UseGuards,
} from '@nestjs/common';
import { CollectService } from './collect.service';
import { CreateCollectRequest } from './collect.dto';
import { UserEntity } from '../../../entity/user.entity';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CollectEntity } from '../../../entity/collect.entity';
import { DeleteResult } from 'typeorm';
import { AuthGuard } from '../../../common/guard/auth.guard';

/**
 * Collect Controller
 */
@ApiTags('collect')
@Controller('collect')
export class CollectController {
  constructor(private readonly collectService: CollectService) {}

  /**
   * Collection
   * @param req CreateCollectRequest
   * @returns InsertResult
   */
  @Post()
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: 'Collection' })
  async create(
    @Session() session: Record<string, UserEntity>,
    @Body() req: CreateCollectRequest,
  ) {
    const entity = new CollectEntity();
    entity.catId = req.catId;
    entity.userId = session.user.id;
    return this.collectService.create(entity);
  }

  /**
   * Cancel Collection
   * @param req number[]
   * @returns DeleteResult
   */
  @Delete()
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: 'Cancel Collection' })
  async delete(@Body() ids: number[]): Promise<DeleteResult | null> {
    return this.collectService.delete(ids);
  }

  /**
   * Query
   * @returns CollectEntity[]
   */
  @Get()
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: 'Query' })
  async select(
    @Session() session: Record<string, UserEntity>,
  ): Promise<CollectEntity[] | null> {
    return this.collectService.select(session.user);
  }
}
