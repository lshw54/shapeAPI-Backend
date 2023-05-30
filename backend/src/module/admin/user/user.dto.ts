import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

@ApiTags('User')
export class CreateUserRequest {
  @ApiProperty({ description: 'Username' })
  @IsString({ message: 'Must be a string' })
  @IsNotEmpty()
  username: string;

  @ApiProperty({ description: 'Password' })
  @IsNotEmpty()
  password1: string;

  @ApiProperty({ description: 'Password' })
  @IsNotEmpty()
  password2: string;

  @ApiProperty({ description: 'Resigter Code' })
  resigterCode: string;
}

export class LoginRequest {
  @ApiProperty({ description: 'Username' })
  @IsString({ message: 'Must be a string' })
  @IsNotEmpty()
  username: string;

  @ApiProperty({ description: 'Password' })
  @IsString({ message: 'Must be a string' })
  @IsNotEmpty()
  password: string;
}
