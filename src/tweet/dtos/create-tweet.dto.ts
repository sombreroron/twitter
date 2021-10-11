import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTweetDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'hi' })
  content: string;
}
