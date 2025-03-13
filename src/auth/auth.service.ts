/* eslint-disable prettier/prettier */
import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthUser } from './entities/auth.entities';
import { RegisterDto } from './dto/register.dto';
import { hash, genSalt, compare } from 'bcrypt';
import { InjectModel } from '@nestjs/sequelize';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
    
    constructor(
        @InjectModel(AuthUser)
        private readonly authUserModel: typeof AuthUser,
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
            where: { email: loginDto.email},
        });
        if (!authUser) {
            throw new UnauthorizedException(
                // The HTTP respone status code will be 401.
                'This Email is already exists. Please try again',
            );
        }
        console.log(authUser);
        console.log(authUser.password);
        // compare password ( data string, encrypt string )
        const isValid = await compare(loginDto.password, authUser.password);
        if (!isValid) {
            throw new UnauthorizedException('Error password');
        }
        // return token
        return {
            message: 'Login Complete',
            access_token: 'XYZ',
        };
    }
}
