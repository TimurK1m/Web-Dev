import { Component, Input, Output, EventEmitter,} from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  id: number;
  name: string;
  description: string;
  rating: number;
  images: string[];
  link: string;
  selectedImage?: string;
  likes: number;
  category: string;
}

@Component({
  selector: 'app-product-item',
  imports:[CommonModule],
  template: `
    <div class="product-card">
      <h3>{{ product.name }}</h3>
      <p>{{ product.description }}</p>
      <p>⭐ Rating: {{ product.rating }}</p>
      
      <div class="gallery">
        <img [src]="product.selectedImage" alt="{{ product.name }}" class="main-img">
        <div class="thumbnail-container">
          <img *ngFor="let img of product.images" 
               [src]="img" 
               class="thumbnail"
               (click)="changeImage(img)">
        </div>
      </div>

      <a [href]="product.link" target="_blank" class="buy-btn">View on Website</a>
      <div class="actions">
        <button (click)="removeProduct()">🗑 Remove</button>
        <button (click)="likeProduct()">❤️ Like ({{ product.likes }})</button>
      </div>
    </div>
  `,
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() remove = new EventEmitter<Product>();
  @Output() like = new EventEmitter<Product>();
  
  changeImage(img: string): void {
    this.product.selectedImage = img;
  }

  removeProduct(): void {
    this.remove.emit(this.product);
  }

  likeProduct(): void {
    this.like.emit(this.product);
  }
}
