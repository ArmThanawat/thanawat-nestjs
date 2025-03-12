/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';
import { UtilityService } from 'src/shared/utility/utility.service';
import { GlobalHelperService } from 'src/shared/global-helper/global-helper.service';

@Controller('product')
export class ProductController {
    constructor(
        private readonly productService: ProductService,
        private readonly utilityService: UtilityService,
        private readonly globalHelperService: GlobalHelperService,
    ){}

    @Get() // localhost:3000/product
    getPDF1(): string {
        return this.productService.productFunc1();
    }

    @Get('/func2') // localhost:3000/product/func2
    getPDF2(): string {
        return this.productService.productFunc2();
    }

    @Get('/shared') // localhost:3000/product/shared
    sharedFunc(): string {
        return this.utilityService.shareFunc();
    }

    @Get('/global') // localhost:3000/product/global
    globalFunc(): string {
        return this.globalHelperService.globalFunc();
    }
}