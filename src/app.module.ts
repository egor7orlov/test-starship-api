import { Module } from '@nestjs/common';
import { HttpApiModule } from './http-api/http-api.module';

@Module({
  imports: [HttpApiModule],
})
export class AppModule {}
