import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  readonly id: number;

  @IsString()
  @IsNotEmpty()
  readonly firstName: string;

  @IsString()
  @IsNotEmpty()
  readonly lastName: string;

  @IsBoolean()
  @IsNotEmpty()
  readonly isActive: boolean;
}
