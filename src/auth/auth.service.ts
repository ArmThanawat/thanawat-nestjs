/* eslint-disable prettier/prettier */
import { BadRequestException, Injectable } from '@nestjs/common';
import { AuthUser } from './entities/auth.entities';
import { RegisterDto } from './dto/register.dto';
import { hash, genSalt } from 'bcrypt';
import { InjectModel } from '@nestjs/sequelize';

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

        // encrypt password (hash)
        const salt = await genSalt(10);
        const hashedPassword = await hash(registerDto.password, salt);

        const newUser = await this.authUserModel.create({
            username: registerDto.username,
            email: registerDto.email,
            password: hashedPassword,
        });
        return newUser;
    }
}
