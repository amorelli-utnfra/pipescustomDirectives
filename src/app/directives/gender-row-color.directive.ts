import { Directive, ElementRef, HostBinding, Input, OnChanges, OnInit } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appGenderRowColor]',
})
export class GenderRowColorDirective implements OnInit, OnChanges {
  @Input() appGenderRowColor: string = 'male'; 

  @HostBinding('style.backgroundColor') backgroundColor!: string;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.updateBackgroundColor();
  }

  ngOnChanges() {
    this.updateBackgroundColor();
  }


  private updateBackgroundColor() {
    
        switch (this.appGenderRowColor) {
      case 'female':
        this.backgroundColor = '#ffc1c1'; // Rosa
        break;
      case 'male':
        this.backgroundColor = '#c1fffe'; // Celeste
        break;
      default:
        this.backgroundColor = 'transparent'; // Color por defecto
    }
  }
}