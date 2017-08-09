
import {Directive, ElementRef, Input} from '@angular/core';
import * as Inputmask from 'inputmask';


@Directive({
  selector: '[only-letters]',
})
export class OnlylettersDirective {


  private regexMap = {
    
    words: '([A-z]*\\s)*',
    
  };

  constructor(private el: ElementRef) {}

  @Input('only-letters')
  public set defineInputType(type: string) {
    Inputmask({regex: this.regexMap[type], placeholder: ''})
      .mask(this.el.nativeElement);
  }

}