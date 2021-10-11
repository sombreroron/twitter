import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from '../../app.service';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../app.module';

describe('AppController', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();

    await app.init();
  });

  describe('Create', () => {
    it('should create tweet', () => {
      return request(app.getHttpServer())
        .post('/tweet')
        .expect({})
    });
  });
});
