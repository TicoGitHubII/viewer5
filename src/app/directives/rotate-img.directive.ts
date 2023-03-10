import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRotateImg]'
})
export class RotateImgDirective {

  constructor(private el : ElementRef,  renderer:Renderer2) { }

  
  @HostListener('click')
  onclick(){
    
        var target = document. getElementById('preview');
        // var addTransform = target.style.transform = 'rotate(90deg)'
        console.log( target )
  }
  }


