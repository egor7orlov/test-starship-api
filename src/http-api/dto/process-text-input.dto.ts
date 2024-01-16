import { IsNotEmpty, IsString } from 'class-validator';

export class ProcessTextInputDto {
  @IsNotEmpty()
  @IsString()
  text: string;
}
