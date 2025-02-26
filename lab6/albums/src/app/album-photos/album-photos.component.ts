import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';

interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css'],
  imports:[CommonModule,RouterOutlet,RouterLink,RouterLinkActive],
})
export class AlbumPhotosComponent implements OnInit {
  albumId!: number;
  photos: Photo[] = [];
  apiUrl = 'https://jsonplaceholder.typicode.com/albums';

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.albumId = Number(params.get('id'));
      this.fetchPhotos();
    });
  }

  fetchPhotos(): void {
    this.http
      .get<Photo[]>(`${this.apiUrl}/${this.albumId}/photos`)
      .subscribe((data) => {
        this.photos = data;
      });
  }
}
