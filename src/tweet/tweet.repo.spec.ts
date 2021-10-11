import { Test, TestingModule } from '@nestjs/testing';
import { TweetRepo } from './tweet.repo';

describe('TweetRepo', () => {
  let provider: TweetRepo;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TweetRepo],
    }).compile();

    provider = module.get<TweetRepo>(TweetRepo);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
