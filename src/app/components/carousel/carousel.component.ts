import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  itemsPerSlide = 4;
  singleSlideOffset = true;
  noWrap = true;
 
  slides = [
    {image: 'assets/images/thumbnails/7111-m.jpg'},
    {image: 'assets/images/thumbnails/7118-m.jpg'},
    {image: 'assets/images/thumbnails/71147-m.jpg'},
    {image: 'assets/images/thumbnails/7130-m.jpg'},
    {image: 'assets/images/thumbnails/7143-m.jpg'},
    {image: 'assets/images/thumbnails/7155-m.jpg'},
    {image: 'assets/images/thumbnails/7153-m.jpg'},
    {image: 'assets/images/thumbnails/7164-m.jpg'},
    {image: 'assets/images/thumbnails/7112-m.jpg'},
    {image: 'assets/images/thumbnails/7160-m.jpg'}
  ];


}
