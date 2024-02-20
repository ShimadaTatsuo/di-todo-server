import { IsBoolean, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsInt()
  @IsNotEmpty()
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
