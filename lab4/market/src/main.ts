import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { ProductListComponent } from './app/product-list/product-list.component';

bootstrapApplication(AppComponent, {
  providers: [ProductListComponent] // Добавляем сервис в глобальные провайдеры
})
.catch(err => console.error(err));