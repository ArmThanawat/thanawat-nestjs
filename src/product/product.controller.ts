/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';
import { UtilityService } from 'src/shared/utility/utility.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService,
              private readonly utilityService: UtilityService
  ) {}

  @Get('/showJson')
  productJson() {
    return this.productService.productJson();
  }

  @Get('/shared')
  productShared(): string{
    return this.utilityService.sharedFunc();
  }

}
