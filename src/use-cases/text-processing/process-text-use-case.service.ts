import { UseCase } from '../use-case.interface';
import { Injectable } from '@nestjs/common';
import { LangChainService } from '../../domain/lang-chain/lang-chain.service';

@Injectable()
export class ProcessTextUseCase implements UseCase<{ text: string }, string> {
  constructor(private readonly langChainService: LangChainService) {}

  public execute({ text }: { text: string }): string {
    return this.langChainService.processText({ text });
  }
}
