import { Module } from '@nestjs/common';
import { UseCasesModule } from '../use-cases/use-cases.module';
import { RootController } from './root-controller';

@Module({
  imports: [UseCasesModule],
  controllers: [RootController],
})
export class HttpApiModule {}
