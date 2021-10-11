import { Test, TestingModule } from '@nestjs/testing';
import { TweetService } from './tweet.service';
import { TweetRepo } from './tweet.repo';

describe('TweetService', () => {
  let service: TweetService;
  let tweetRepo;

  beforeEach(async () => {
    tweetRepo = {
      save: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [TweetService, { provide: TweetRepo, useValue: tweetRepo}],
    }).compile();

    service = module.get<TweetService>(TweetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
