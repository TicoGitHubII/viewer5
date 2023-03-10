import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions,NgxGalleryImage, NgxGalleryAnimation } from '@rybos/ngx-gallery';
import { Product } from 'src/app/models/product';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent {
  galleryOptions: NgxGalleryOptions[] = [];
  galleryImages: NgxGalleryImage[] = [];
  currentIndex: number = 0;
  tempArr: any[] = [
    {
      small: '/assets/images/thumbnails/7118-m.jpg',
      medium: '/assets/images/thumbnails/7118-b.jpg',
      big: '/assets/images/large/7118-b.jpg',
    },
    {
      small: '/assets/images/thumbnails/7124-m.jpg',
      medium: '/assets/images/thumbnails/7124-m.jpg',
      big: '/assets/images/large/7124-m.jpg',
    },
    {
      small: '/assets/images/thumbnails/7112-m.jpg',
      medium: '/assets/images/thumbnails/7112-m.jpg',
      big: '/assets/images/large/7112-m.jpg',
    }
  ];

  onPrevClick() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
  
  onNextClick() {
    if (this.currentIndex < this.galleryImages.length - 1) {
      this.currentIndex++;
    }
  }

  
  
  
  
  



  ngOnInit(): void {
    this.galleryOptions = [
      {
        width: '800px',
        height: '500px',
        thumbnailsColumns: 4,
        arrowPrevIcon: 'fa fa-chevron-left',
        arrowNextIcon: 'fa fa-chevron-right',
        imageAnimation: NgxGalleryAnimation.Slide,
        imageDescription: true,
        preview: false
        
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '800px',
        imagePercent: 50,
        thumbnailsPercent: 30,
        thumbnailsMargin: 30,
        thumbnailMargin: 30,
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      },
    ];

    this.galleryImages = [
      {
        small: 'https://picsum.photos/300/200',
        medium: 'https://picsum.photos/300/200',
        big: 'https://picsum.photos/1920/1080'
      },
      {
        small: 'https://preview.ibb.co/kPE1D6/clouds.jpg',
        medium: 'https://preview.ibb.co/kPE1D6/clouds.jpg',
        big: 'https://preview.ibb.co/kPE1D6/clouds.jpg'
      },
      {
        small: 'https://preview.ibb.co/mwsA6R/img7.jpg',
        medium: 'https://preview.ibb.co/mwsA6R/img7.jpg',
        big: 'https://preview.ibb.co/mwsA6R/img7.jpg'
      },{
        small: 'https://preview.ibb.co/kZGsLm/img9.jpg',
        medium: 'https://preview.ibb.co/kZGsLm/img9.jpg',
        big: 'https://preview.ibb.co/kZGsLm/img9.jpg'
      },   
      {
        small: 'https://preview.ibb.co/jrsA6R/img18.jpg',
        medium: 'https://preview.ibb.co/jrsA6R/img18.jpg',
        big: 'https://preview.ibb.co/jrsA6R/img18.jpg'
      },
      {
        small: 'https://preview.ibb.co/kPE1D6/clouds.jpg',
        medium: 'https://preview.ibb.co/kPE1D6/clouds.jpg',
        big: 'https://preview.ibb.co/kPE1D6/clouds.jpg'
      },
      {
        small: 'https://preview.ibb.co/mwsA6R/img7.jpg',
        medium: 'https://preview.ibb.co/mwsA6R/img7.jpg',
        big: 'https://preview.ibb.co/mwsA6R/img7.jpg'
      },{
        small: 'https://preview.ibb.co/kZGsLm/img8.jpg',
        medium: 'https://preview.ibb.co/kZGsLm/img8.jpg',
        big: 'https://preview.ibb.co/kZGsLm/img8.jpg'
      }   
    ];
    
    
    // [
    //   {
    //     small: '/assets/images/thumbnails/7118-m.jpg',
    //     medium: '/assets/images/thumbnails/7118-b.jpg',
    //     big: '/assets/images/large/7118-b.jpg',
    //   },
    //   {
    //     small: '/assets/images/thumbnails/7124-m.jpg',
    //     medium: '/assets/images/thumbnails/7124-b.jpg',
    //     big: '/assets/images/large/7124-b.jpg',
    //   },
    //   {
    //     small: '/assets/images/thumbnails/7112-m.jpg',
    //     medium: '/assets/images/thumbnails/7112-b.jpg',
    //     big: '/assets/images/large/7112-b.jpg',
    //   },
    //   {
    //     small: './assets/images/thumbnails/7130-m.jpg',
    //     medium: '/assets/images/thumbnails/7130-b.jpg',
    //     big: '/assets/images/large/7130-b.jpg',
    //   },
    //   {
    //     small: '/assets/images/thumbnails/7131-m.jpg',
    //     medium: '/assets/images/thumbnails/7131-b.jpg',
    //     big: '/assets/images/large/7131-b.jpg',
    //   },
    //   {
    //     small: './assets/images/thumbnails/7141-m.jpg',
    //     medium: '/assets/images/thumbnails/7141-b.jpg',
    //     big: '/assets/images/large/7141-b.jpg',
    //   },
    //   {
    //     small: '/assets/images/thumbnails/7150-m.jpg',
    //     medium: '/assets/images/thumbnails/7150-b.jpg',
    //     big: '/assets/images/large/7150-b.jpg',
    //   },
    //   {
    //     small: './assets/images/thumbnails/7152-m.jpg',
    //     medium: '/assets/images/thumbnails/7152-b.jpg',
    //     big: '/assets/images/large/7152-b.jpg',
    //   },
    //   {
    //     small: '/assets/images/thumbnails/7155-m.jpg',
    //     medium: '/assets/images/thumbnails/7155-b.jpg',
    //     big: '/assets/images/large/7155-b.jpg',
    //   },
    //   {
    //     small: './assets/images/thumbnails/7160-m.jpg',
    //     medium: '/assets/images/thumbnails/7160-b.jpg',
    //     big: '/assets/images/large/7160-b.jpg',
    //   },
    //   {
    //     small: '/assets/images/thumbnails/7162-m.jpg',
    //     medium: '/assets/images/thumbnails/7162-b.jpg',
    //     big: '/assets/images/large/7162-b.jpg',
    //   },
    // ];
  }
}
