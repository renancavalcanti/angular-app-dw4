import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/products';

@Component({
  selector: 'app-product-item',
  imports: [],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss'
})
export class ProductItemComponent {
  @Input() product: Product | undefined;
  @Output() addToCart = new EventEmitter<Product>();

  onAddToCart(){
    //console.log(this.product?.price)
    this.addToCart.emit(this.product)
  }
}
