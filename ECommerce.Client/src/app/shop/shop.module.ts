import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './Components/shop/shop.component';
import { ProductItemComponent } from './Components/product-item/product-item.component';
import { SharedModule } from '../shared/shared.module';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ShopComponent,
    ProductItemComponent,
    ProductDetailsComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    ShopRoutingModule,
    SharedModule,
  ],
  exports : [
    ShopComponent,
    ProductDetailsComponent
  ]
})
export class ShopModule { }
