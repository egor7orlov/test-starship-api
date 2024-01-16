import { Module } from '@nestjs/common';
import { LangChainModule } from '../domain/lang-chain/lang-chain.module';
import { ProcessTextUseCase } from './text-processing/process-text.use-case';
import { UseCaseClass } from './use-case.interface';

const USE_CASES: Array<UseCaseClass<Record<string, unknown>, unknown>> = [
  ProcessTextUseCase,
];

@Module({
  imports: [LangChainModule],
  providers: USE_CASES,
  exports: USE_CASES,
})
export class UseCasesModule {}
