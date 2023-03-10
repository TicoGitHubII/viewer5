import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appViewerStyle]'
})
export class ViewerStyleDirective {

  constructor(private el : ElementRef) { }
  @HostListener('click')
  imageChange(){
    var src:any = this.el.nativeElement.src;
    var prev:any = document.getElementById("preview");
    prev.src = src;
    var imageSlide = document.getElementsByTagName("img-slide");
    for(let i=0; i < imageSlide.length; i++){
       imageSlide[i].classList.remove("active");
    }
    this.el.nativeElement.parentElement.classList.add("active");

  }

}
