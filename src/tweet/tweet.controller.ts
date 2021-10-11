import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateTweetDto } from './dtos/create-tweet.dto';

@Controller('tweet')
export class TweetController {
  @UsePipes(new ValidationPipe())
  @Post()
  createTweet(@Body() body: CreateTweetDto) {
    return {};
  }
}
