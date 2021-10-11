import { Injectable } from '@nestjs/common';
import { TweetRepo } from './tweet.repo';

@Injectable()
export class TweetService {
  constructor(private repo: TweetRepo) {
  }

  createTweet(tweet) {
    this.repo.save(tweet);
  }
}
