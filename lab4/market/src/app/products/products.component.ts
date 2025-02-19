import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Product {
  id:number;
  name: string;
  description: string;
  rating: number;
  images: string[];
  link: string;
  selectedImage?: string;
  likes:0;
}
interface Category {
  name: string;
  products: Product[];
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
  <main>
    <a [routerLink]="['/']">
      <header class="brand-name"></header>
    </a>
      <div class="product-list">
        <div *ngFor="let product of products" class="product-card">
            <div class="gallery">
              <div style="height: 400px;">
                <img [src]="product.selectedImage || product.images[0]" 
                    alt="{{ product.name }}" 
                    class="main-img">
              </div>

              <div class="thumbnail-container">
                <img *ngFor="let img of product.images" 
                    [src]="img" 
                    class="thumbnail"
                    (click)="changeMainImage(product, img)">
              </div>
          </div>
          <h2>{{ product.name }}</h2>
          <p>{{ product.description }}</p>
          <p>⭐ Rating: {{ product.rating }}</p>
          <a [href]="product.link" target="_blank" class="buy-btn">View on Kaspi.kz</a>
          <div class="share-buttons">
            <button (click)="shareOnWhatsapp(product)">📲 WhatsApp</button>
            <button (click)="shareOnTelegram(product)">📢 Telegram</button>
          </div>
        </div>
      </div>
  </main>
  `,
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] = [
    {
      id:1,
      name: "iPhone 15 Pro Max",
      description: "Latest Apple iPhone with A17 chip",
      rating: 4.8,
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/ha3/hda/86319874048030.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/he8/hdf/86319874211870.jpg?format=gallery-large",
        "https://resources.cdn-kaspi.kz/img/m/p/h6d/heb/86319874310174.jpg?format=gallery-large"
      ],
      link: "https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/?c=750000000",
      selectedImage: "",
      likes:0,
    },
    {
      id:2,
      name: "Samsung Galaxy S23 Ultra",
      description: "Flagship smartphone with S Pen",
      rating: 4.7,
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/h5e/h53/69635680763934.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/hcd/hb0/69635684368414.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/he0/hae/69635684892702.jpg?format=gallery-medium"
      ],
      link: "https://kaspi.kz/shop/p/samsung-galaxy-s23-ultra-12-gb-256-gb-chernyi-109174566/?c=750000000",
      selectedImage: "",
      likes:0,
    },
    {
      id:3,
      name: "Подставка Afkas-nova AK-37 черный",
      description: "настольный держатель для смартфона. Он изготовлен из алюминия и пластика.",
      rating: 4.8,
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/h33/haf/65966324580382.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h4c/hc2/65966325891102.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/hbd/h80/65966326153246.jpg?format=gallery-medium"
      ],
      link: "https://kaspi.kz/shop/p/podstavka-afkas-nova-ak-37-chernyi-107656268/?c=750000000",
      likes:0,
    },
    {
      id:4,
      name: "Смартфон Xiaomi Redmi 13C 8 ГБ/256 ГБ черный",
      description: "Операционная системаAndroid 13 Tiramisu MIUI 14",
      rating: 4.5,
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/h1b/h77/84526902706206.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/hf4/h4b/84526902771742.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h0f/h2d/84526902837278.jpg?format=gallery-medium"
      ],
      link: "https://kaspi.kz/shop/p/xiaomi-redmi-13c-8-gb-256-gb-chernyi-114695323/?c=750000000",
      likes:0,
    },
    {
      id:5,
      name: "Кабель Apple Lightning (M), USB TypeC (M) белый",
      description: "Кабель Apple USB Type-C - Lightning длиной 1 м ",
      rating: 4.6,
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/h4b/hd8/87059455311902.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h8d/h64/87059455344670.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h0a/hf3/87059455410206.png?format=gallery-medium"
      ],
      link: "https://kaspi.kz/shop/p/kabel-apple-lightning-m-usb-typec-m-belyi-40500508/?c=750000000",
      likes:0,
    },
    {
      id:6,
      name: "Зарядное устройство Apple 18W USB-C Power Adapter USB Type-C белый",
      description: "Представляет собой компактное и эффективное зарядное устройство, предназначенное для быстрой и эффективной зарядки ваших устройств.",
      rating: 4.9,
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/h1b/hd6/64377056231454.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h93/h72/64377059409950.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h16/h93/64377062064158.jpg?format=gallery-medium"
      ],
      link: "https://kaspi.kz/shop/p/apple-18w-usb-c-power-adapter-usb-type-c-belyi-102743952/?c=750000000",
      likes:0,
    },
    
    {
      id:7,
      name: "Внешний аккумулятор SP-005 10000 мАч черный",
      description: "Удобный внешний аккумулятор является объективно нужным и стильным аксессуаром для всех.",
      rating: 4.8,
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/p42/pfd/3162635.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/pef/pb1/3162637.jpeg?format=gallery-medium",
        
      ],
      link: "https://kaspi.kz/shop/p/sp-005-10000-mach-chernyi-115816559/?c=750000000",
      likes:0,
    },
    
    {
      id:8,
      name: "Смарт-часы Xiaomi Redmi Watch 5 Active 51 мм черный-черный",
      description: "Redmi Watch 5 Active с большим дисплеем помогут вести активны образ жизни, контролировать ваше здоровье и повысить эффективность при решении повседневных задач.",
      rating: 5.0,
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/hec/h25/87197780049950.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h5b/h70/87197780181022.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h5e/hf2/87197780312094.jpg?format=gallery-medium"
      ],
      link: "https://kaspi.kz/shop/p/xiaomi-redmi-watch-5-active-51-mm-chernyi-chernyi-123879372/?c=750000000",
      likes:0,
    },
    
    {
      id:9,
      name: "Смарт-часы Huawei Watch Fit 3 черный",
      description: "С HUAWEI WATCH FIT 3 здоровый образ жизни доступен каждому.",
      rating: 5.0,
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/h60/ha1/86079581487134.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h3f/he0/86079581552670.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h87/h4e/86079581683742.jpg?format=gallery-medium"
      ],
      link: "https://kaspi.kz/shop/p/huawei-watch-fit-3-chernyi-119668941/?c=750000000",
      likes:0,
    },
    
    {
      id:10,
      name: "Подставка FLOVEME G901 черный",
      description: "Представляет собой компактное и эффективное зарядное устройство, предназначенное для быстрой и эффективной зарядки ваших устройств.",
      rating: 4.8,
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/h13/hb5/68724234649630.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/hae/h00/65134564900894.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h37/h37/65134567653406.jpg?format=gallery-medium"
      ],
      link: "https://kaspi.kz/shop/p/podstavka-floveme-g901-chernyi-104680546/?c=750000000",
      likes:0,
    },
  ];

  changeMainImage(product: Product, newImage: string) {
    product.selectedImage = newImage;
  }
  shareOnWhatsapp(product:Product){
    const url=`https://wa.me/?text=Check this product: ${product.link}`;
    window.open(url,'_blank')
  }
  
  shareOnTelegram(product:Product){
    const url =`https://t.me/share/url?url=${product.link}&text=Check this product`;
    window.open(url,'_blank')
  }

    categories: Category[] = [
      { name: 'Electronics', products: this.generateProducts(1) },
      { name: 'Clothing', products: this.generateProducts(2) },
      { name: 'Books', products: this.generateProducts(3) },
      { name: 'Home Appliances', products: this.generateProducts(4) }
    ];
  
    selectedCategory: Category | null = null;
  
    selectCategory(category: Category) {
      this.selectedCategory = category;
    }
  
    removeProduct(productId: number) {
      if (this.selectedCategory) {
        this.selectedCategory.products = this.selectedCategory.products.filter(p => p.id !== productId);
      }
    }
  
    generateProducts(categoryId: number): Product[] {
      return Array.from({ length: 5 }, (_, i) => ({
        id: categoryId * 10 + i,
        name: `Product ${categoryId * 10 + i}`,
        description: `Description for product ${categoryId * 10 + i}`,
        rating: 4.5,
        images: [
          `https://via.placeholder.com/150?text=Product${categoryId * 10 + i}-1`,
          `https://via.placeholder.com/150?text=Product${categoryId * 10 + i}-2`,
          `https://via.placeholder.com/150?text=Product${categoryId * 10 + i}-3`
        ],
        link: `https://example.com/product/${categoryId * 10 + i}`,
        selectedImage: `https://via.placeholder.com/150?text=Product${categoryId * 10 + i}-1`,
        likes:0,
      }));
    }
}