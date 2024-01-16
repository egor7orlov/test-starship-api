import { ProcessTextUseCase } from '../use-cases/text-processing/process-text.use-case';
import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ProcessTextInputDto } from './dto/process-text-input.dto';

@Controller()
export class RootController {
  constructor(private readonly answerCommandUseCase: ProcessTextUseCase) {}

  @Post('process-text')
  @HttpCode(200)
  public processText(@Body() { text }: ProcessTextInputDto): {
    answer: string;
  } {
    const answer = this.answerCommandUseCase.execute({ text });

    return { answer };
  }
}
