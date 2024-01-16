import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { keywordToAnswer } from '../src/domain/lang-chain/lang-chain.service';
import { AppModule } from '../src/app.module';

describe('RootController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
      }),
    );
    await app.init();
  });

  it('/process-text (POST); should not know how to answer', async () => {
    const body = { text: 'Flat earth' };
    const response = await request(app.getHttpServer())
      .post('/process-text')
      .send(body);

    expect(response.statusCode).toEqual(400);
  });

  it('/process-text (POST); should reject because of empty body', async () => {
    const body = {};
    const response = await request(app.getHttpServer())
      .post('/process-text')
      .send(body);

    expect(response.statusCode).toEqual(400);
  });

  it('/process-text (POST); should reject because of empty input text', async () => {
    const body = { text: '' };
    const response = await request(app.getHttpServer())
      .post('/process-text')
      .send(body);

    expect(response.statusCode).toEqual(400);
  });

  it('/process-text (POST); should answer when multiple keywords are detected', async () => {
    const body = { text: 'Launch us to Mars baby!' };
    const response = await request(app.getHttpServer())
      .post('/process-text')
      .send(body);

    expect(response.statusCode).toEqual(200);
    expect(response.body).toStrictEqual({
      answer: keywordToAnswer.launch + '\n\n' + keywordToAnswer.mars,
    });
  });

  it('/process-text (POST); should answer when one keyword is detected', async () => {
    const body = { text: 'To Mars baby!' };
    const response = await request(app.getHttpServer())
      .post('/process-text')
      .send(body);

    expect(response.statusCode).toEqual(200);
    expect(response.body).toStrictEqual({
      answer: keywordToAnswer.mars,
    });
  });

  it('/process-text (POST); should answer when multiple keywords are detected (with punctuation)', async () => {
    const body = { text: 'Launch: to; Mars, baby!' };
    const response = await request(app.getHttpServer())
      .post('/process-text')
      .send(body);

    expect(response.statusCode).toEqual(200);
    expect(response.body).toStrictEqual({
      answer: keywordToAnswer.launch + '\n\n' + keywordToAnswer.mars,
    });
  });
});
