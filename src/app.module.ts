import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { UtilityModule } from './shared/utility/utility.module';
import { ChatModule } from './chat/chat.module';
import { OrderModule } from './order/order.module';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { GlobalHelperModule } from './shared/global-helper/global-helper.module';

@Module({
  imports: [ProductModule, UtilityModule, ChatModule, OrderModule, UserModule, GlobalHelperModule],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
