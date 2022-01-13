import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface ImageFiles {
  imageFiles: [][];
}

@Injectable({
  providedIn: 'root',
})
export class GalleryImagesService {
  configUrl = 'assets/gallery/images.json';

  constructor(private http: HttpClient) {}

  getImageFiles(): Observable<ImageFiles> {
    return this.http.get<ImageFiles>(this.configUrl);
  }
}
