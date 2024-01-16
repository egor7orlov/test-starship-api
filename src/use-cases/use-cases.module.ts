import { Module } from '@nestjs/common';
import { LangChainModule } from '../domain/lang-chain/lang-chain.module';
import { ProcessTextUseCase } from './text-processing/./process-text.use-case';

const USE_CASES = [ProcessTextUseCase];

@Module({
  imports: [LangChainModule],
  providers: USE_CASES,
  exports: USE_CASES,
})
export class UseCasesModule {}
