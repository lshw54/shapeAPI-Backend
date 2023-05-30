import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

@ApiTags('Collector')
export class CreateCollectRequest {
  @ApiProperty({ description: 'Cat ID' })
  @IsNotEmpty()
  catId: number;
}

export class DeleteCollectRequest {
  @ApiProperty({ description: 'Collect ID' })
  @IsNotEmpty()
  id: number;
}
