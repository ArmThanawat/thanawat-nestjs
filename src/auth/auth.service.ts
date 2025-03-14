/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthUser } from './entities/auth.entities';
import { RegisterDto } from './dto/register.dto';
import { hash, genSalt, compare } from 'bcrypt';
import { InjectModel } from '@nestjs/sequelize';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    
    constructor(
        @InjectModel(AuthUser)
        private readonly authUserModel: typeof AuthUser,
        private jwtService: JwtService,
    ) {}

    async register(registerDto: RegisterDto) {
        
        const authUser = await this.authUserModel.findOne({
            where: {email: registerDto.email},
        });
        
        if (authUser) {
            throw new BadRequestException('This email is already exists. Please try again.',);
        }

        console.log(registerDto);

        // encrypt password (hash)
        const salt = await genSalt(10);
        const hashPassword = await hash(registerDto.password, salt);

        console.log(hashPassword);

        const newUser = await this.authUserModel.create({
            username: registerDto.username,
            email: registerDto.email,
            password: hashPassword,
        });
        return newUser;
    }

    async login(loginDto: LoginDto) {
        const authUser = await this.authUserModel.findOne({
            where: { email: loginDto.email },
            attributes: ['id', 'username', 'email', 'password'] // Ensure password is included
        });

        const password = authUser?.dataValues?.password || authUser?.password;

    
        if (!authUser) {
            throw new UnauthorizedException('Invalid email or password');
        }
    
        console.log(authUser?.dataValues);
        console.log(authUser.password);
        console.log(password)
    
        // Ensure loginDto.password is not undefined before comparing
        if (!password) {
            throw new BadRequestException('Password is required');
        }
    
        const isValid = await compare(loginDto.password, password);
        
        if (!isValid) {
            throw new UnauthorizedException('Invalid password');
        }

        // generate JWT token
        // payload contains the claims or the data being transferred (id).
        const payload = { user_id: authUser.id }
        const token = await this.jwtService.signAsync( payload, { secret: process.env.JWT_SECRET_KEY });
    
        return { message: 'Login Complete', access_token: token };
    }

    async getUserProfile(id: number) {
        return await this.authUserModel.findByPk(id, {
            attributes: ['id', 'username', 'email'],
        });
    }
    
}
