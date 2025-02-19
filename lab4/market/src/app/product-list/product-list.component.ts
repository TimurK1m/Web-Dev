import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';

interface Product {
  id: number;
  name: string;
  description: string;
  rating: number;
  images: string[];
  link: string;
  selectedImage?: string;
  likes: number;
}

@Component({
  selector: 'app-product-list',
  imports:[ProductItemComponent],
  template: `
    <div class="product-list">
      <app-product-item 
        *ngFor="let product of products" 
        [product]="product"
        (remove)="remove.emit($event)">
      </app-product-item>
    </div>
  `,
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() products: Product[] = [];
  @Output() remove = new EventEmitter<number>();
}
