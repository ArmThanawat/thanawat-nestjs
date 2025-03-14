/* eslint-disable prettier/prettier */

import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthUser } from './entities/auth.entities';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { jwtStrategy } from './jwt.strategy';

@Module({
  controllers: [AuthController],
  providers: [AuthService, jwtStrategy],
  imports: [
    SequelizeModule.forFeature([AuthUser]),
    JwtModule.register({
      signOptions: { expiresIn: '1d'},
    }),
    PassportModule,
  ],
})
export class AuthModule {}
