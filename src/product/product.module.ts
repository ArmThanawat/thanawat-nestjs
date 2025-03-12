/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { UtilityModule } from 'src/shared/utility/utility.module';

@Module({
  controllers: [ProductController],
  providers: [ProductService],
  imports: [UtilityModule],
})
export class ProductModule {}