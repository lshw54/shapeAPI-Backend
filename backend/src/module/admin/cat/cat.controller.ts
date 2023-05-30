import {
  Body,
  Controller,
  Delete,
  Post,
  Put,
  Get,
  UseGuards,
  Session,
} from '@nestjs/common';
import { CatService } from './cat.service';
import { CreateCatRequest, UpdateCatRequest } from './cat.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CatEntity } from '../../../entity/cat.entity';
import { DeleteResult } from 'typeorm';
import { AuthGuard } from '../../../common/guard/auth.guard';
import { UserEntity } from '../../../entity/user.entity';

/**
 * Cat Controller
 */
@ApiTags('cat')
@Controller('cat')
export class CatController {
  constructor(private readonly catService: CatService) {}

  /**
   * Add Cat information
   * @param req CreateCatRequest
   * @returns InsertResult
   */
  @Post()
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: 'Add Cat information' })
  async create(
    @Session() session: Record<string, UserEntity>,
    @Body() req: CreateCatRequest,
  ) {
    const entity = new CatEntity();
    entity.catType = req.catType;
    entity.catName = req.catName;
    entity.remark = req.remark;
    entity.createdBy = session.user.userName;
    return this.catService.create(entity);
  }

  /**
   * Delete
   * @param req number[]
   * @returns DeleteResult
   */
  @Delete()
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: 'Delete' })
  async delete(@Body() ids: number[]): Promise<DeleteResult | null> {
    return this.catService.delete(ids);
  }

  /**
   * Update
   * @param req number[]
   * @returns DeleteResult
   */
  @Put()
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: 'Update' })
  async update(
    @Session() session: Record<string, UserEntity>,
    @Body() req: UpdateCatRequest,
  ): Promise<DeleteResult | null> {
    return this.catService.update(req);
  }

  /**
   * Query
   * @returns CatEntity[]
   */
  @Get()
  @ApiOperation({ summary: 'Query' })
  async select(dto: CatEntity): Promise<CatEntity[] | null> {
    return this.catService.select(dto);
  }
}
