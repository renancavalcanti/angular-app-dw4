import { Component } from '@angular/core';
import { Product } from '../../models/products';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-list-products',
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.scss'
})
export class ListProductsComponent {
  products: Product[] = [
    { id: 1, name: 'Product A', price: 10.99 },
    { id: 2, name: 'Product B', price: 5.99 },
    { id: 3, name: 'Product C', price: 7.30 }
  ];
  sum = 0;

  onAddToCart(product: Product){
      console.log("From Parent:", product);
      this.sum += product.price;
  }
}
