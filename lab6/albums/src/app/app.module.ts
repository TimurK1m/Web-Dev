import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';

@NgModule({
  declarations: [
],
imports: [
      AppComponent,
      HomeComponent,
      AboutComponent,
      AlbumsComponent,
      AlbumDetailComponent,
    BrowserModule,
    AppRoutes,
    HttpClientModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {}
