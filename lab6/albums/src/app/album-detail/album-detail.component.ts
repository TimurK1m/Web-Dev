import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AlbumsService } from '../services/albums.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css'],
  imports:[CommonModule,RouterOutlet,RouterLinkActive,RouterLink,FormsModule],
})
export class AlbumDetailComponent implements OnInit {
  album: any;
  albumTitle: string = '';
  photos:any[]=[];
  isEditing: boolean = false;

  constructor(private route: ActivatedRoute, private albumsService: AlbumsService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumsService.getAlbum(id).subscribe((data) => {
      this.album = data;
      this.albumTitle=data.title
    });
  }
  enableEditing(): void {
    this.isEditing = true;
  }
  saveTitle(): void {
    if (!this.album) return;

    this.album.title = this.albumTitle;
    this.albumsService.updateAlbum(this.album.id, { title: this.albumTitle }).subscribe(() => {
      this.isEditing = false;
    });
  }
  
}
