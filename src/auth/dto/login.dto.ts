/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-call */

import { IsNotEmpty, IsEmail } from 'class-validator';

export class LoginDto {
  @IsNotEmpty({ message: 'email required!' })
  @IsEmail({}, { message: 'The Email format is incorrect.' })
  email: string;

  @IsNotEmpty({ message: 'Password Required!'})
  password: string;
}