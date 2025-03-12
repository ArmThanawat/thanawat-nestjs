/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Customer } from './entities/customer.entity';

@Module({
  controllers: [CustomerController],
  providers: [CustomerService],
  imports: [SequelizeModule.forFeature([Customer])],
})
export class CustomerModule {}
