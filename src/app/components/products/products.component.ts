import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  currentIndex = 0;
  products: Product[] = [];
  rotationAngle = 0;
  galleryImages = [
    { img1: 'https://picsum.photos/300/200' },
    { img2: 'https://preview.ibb.co/kPE1D6/clouds.jpg' },
    { img3: 'https://preview.ibb.co/mwsA6R/img7.jpg' },
    { img4: 'https://preview.ibb.co/kZGsLm/img9.jpg' },
    { img5: 'https://preview.ibb.co/jrsA6R/img18.jpg' },
    { img6: 'https://preview.ibb.co/kPE1D6/clouds.jpg' },
    { img7: 'https://preview.ibb.co/mwsA6R/img7.jpg' },
    { img8: 'https://preview.ibb.co/kZGsLm/img8.jpg' },
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
    if (this.currentIndex < this.products.length - 1) {
      this.currentIndex++;
    }
  }

  ngOnInit(): void {
    this.dataService.getData().subscribe((response: Product[]) => {
      this.products = response;
      console.log(this.products);
    });
  }
}
