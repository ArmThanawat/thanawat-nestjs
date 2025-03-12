/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { UtilityModule } from './shared/utility/utility.module';
import { GlobalHelperModule } from './shared/global-helper/global-helper.module';
import { CustomerModule } from './customer/customer.module';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Dialect } from 'sequelize';
import { Customer } from './customer/entities/customer.entity';

@Module({
  imports: [ProductModule,
            UtilityModule,
            GlobalHelperModule,
            CustomerModule,
            ConfigModule.forRoot(),
            SequelizeModule.forRoot({
              dialect: process.env.DB_DIALECT as Dialect,
              host: process.env.DB_HOST,
              database: process.env.DB_DATABASE,
              username: process.env.DB_USER,
              password: process.env.DB_PASSWORD,
              port: Number(process.env.DB_PORT),
              models: [Customer],
              autoLoadModels: true,
              sync: {alter: true},
            }),
            ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
