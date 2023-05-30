import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

@ApiTags('Cat')
export class CreateCatRequest {
  @ApiProperty({ description: 'Type' })
  @IsNotEmpty()
  catType: string;

  @ApiProperty({ description: 'Name' })
  @IsNotEmpty()
  catName: string;

  @ApiProperty({ description: 'Remarks' })
  remark: string;
}

export class UpdateCatRequest {
  @ApiProperty({ description: 'ID' })
  @IsNotEmpty()
  id: number;

  @ApiProperty({ description: 'Type' })
  @IsNotEmpty()
  catType: string;

  @ApiProperty({ description: 'Name' })
  @IsNotEmpty()
  catName: string;

  @ApiProperty({ description: 'Remarks' })
  remark: string;
}
