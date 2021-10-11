import { Injectable } from '@nestjs/common';

@Injectable()
export class TweetRepo {
  private tweets = [];

  save(tweet) {
    this.tweets.push(tweet);
  }

  get() {
    return this.tweets;
  }
}
