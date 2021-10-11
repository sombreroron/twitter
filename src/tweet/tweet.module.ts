import { Module } from '@nestjs/common';
import { TweetController } from './tweet.controller';
import { TweetService } from './tweet.service';
import { TweetRepo } from './tweet.repo';

@Module({
  controllers: [TweetController],
  providers: [TweetService, TweetRepo],
})
export class TweetModule {}
