import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Product } from 'src/app/models/product';
import { ImgArr } from 'src/app/models/imgArr';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  currentIndex = 0;
  minDisplayedThumbnails =3;
  products: Product[] = [];
  rotationAngle = 0;

  galleryImages: ImgArr[] = [
    { id: '1', image: 'https://picsum.photos/id/1/800/600' },
    { id: '2', image: 'https://picsum.photos/id/50/800/600' },
    { id: '3', image: 'https://picsum.photos/id/10/800/600' },
    { id: '4', image: 'https://picsum.photos/id/130/800/600' },
    { id: '5', image: 'https://picsum.photos/id/25/800/600' },
    { id: '6', image: 'https://picsum.photos/id/4/800/600' },
    { id: '7', image: 'https://picsum.photos/id/1/800/600' },
    { id: '8', image: 'https://picsum.photos/id/50/800/600' },
    { id: '9', image: 'https://picsum.photos/id/10/800/600' },
    { id: '10', image: 'https://picsum.photos/id/130/800/600' },
    { id: '11', image: 'https://picsum.photos/id/25/800/600' },
    { id: '12', image: 'https://picsum.photos/id/4/800/600' },
    { id: '13', image: 'https://picsum.photos/id/25/800/600' },
    { id: '14', image: 'https://picsum.photos/id/4/800/600' },
    { id: '15', image: 'https://picsum.photos/id/4/800/600' },
  ];

  constructor(private dataService: DataService) {}

  rotateImage() {
    this.rotationAngle += 90;
  }

  onPrevClick() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  onNextClick() {
    if (this.currentIndex < this.  galleryImages.length - 1) {
      this.currentIndex++;
    }
  }

  ngOnInit(): void {
    // this.dataService.getData().subscribe((response: Product[]) => {
    //   this.products = response;
    //   console.log(this.products);
    // });
  }
}
