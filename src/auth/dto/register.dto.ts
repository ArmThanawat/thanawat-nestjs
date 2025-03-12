/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsNotEmpty, IsEmail } from 'class-validator';

export class RegisterDto {
  @IsNotEmpty({ message: 'Username required!' })
  username: string;

  @IsNotEmpty({ message: 'Email required!' })
  @IsEmail({}, { message: 'The Email format is incorrect.' })
  email: string;

  @IsNotEmpty({ message: 'Password Required!'})
  password: string;
}
