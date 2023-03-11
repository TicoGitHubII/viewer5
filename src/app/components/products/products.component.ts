import { Component, OnInit , ElementRef} from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Product } from 'src/app/models/product';

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
   slideIndex =0 ;
 

  constructor(private dataService: DataService,  private el : ElementRef) {}

  rotateImage() {
    this.rotationAngle += 90;
  }

  onPrevClick() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  onNextClick() {
    if (this.currentIndex < this. products.length - 1) {
      this.currentIndex++;
    }
  }


 
  onThumbnailClick(index: number){
    const productIndex = this.currentIndex + index;
    console.log(`onThumbnailClick : clicked slide : ${index} Currentndex${productIndex}`)
    this.currentIndex = productIndex
 
  
  }


  

  ngOnInit(): void {
    this.dataService.getData().subscribe((response: Product[]) => {
      this.products = response;
      console.log(this.products);
     
      console.log(`ngOnInit Render : Currentndex${this.currentIndex}`)
    });
  }
}
