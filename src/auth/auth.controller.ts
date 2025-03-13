/* eslint-disable prettier/prettier */
import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth') // localhost:3000/auth/
export class AuthController {
    constructor(
        private readonly authService: AuthService,
    ) {}

    @Post('/regist') // localhost:3000/auth/regist
    @HttpCode(201) // Show code 201, when register complete
    async register(@Body() registerDto: RegisterDto) {
        await this.authService.register(registerDto);
        return {
            message: 'Register Complete',
        };
    }

    @Post('/login') // localhost:3000/auth/login
    @HttpCode(201) // Show code 201, when login complete
    async login(@Body() loginDto: LoginDto) {
        await this.authService.login(loginDto);
        return {
            message: 'Login Complete',
        };
    }
}