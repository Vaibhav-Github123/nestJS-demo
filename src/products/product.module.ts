import { Module } from '@nestjs/common';
import { ProductController } from './products.controller';
import { ProductsSrvice } from './product.service';

@Module({
  controllers: [ProductController],
  providers: [ProductsSrvice],
})
export class ProductsModule {}
