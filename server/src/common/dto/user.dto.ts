import { IsEmail, IsNotEmpty } from 'class-validator';

export abstract class UserDto {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
