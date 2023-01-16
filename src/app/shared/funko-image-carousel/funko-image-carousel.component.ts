import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-funko-image-carousel',
  templateUrl: './funko-image-carousel.component.html',
  styleUrls: ['./funko-image-carousel.component.less'],
})
export class FunkoImageCarouselComponent implements OnInit, OnChanges {
  @Input() funkoImages: any;
  @Input() idFunko: number;
  @Input() fromPage: string;

  imageModel = [
    {
      name: 'model-box.jpg',
      order: 1,
    },
    {
      name: 'model-funko.jpeg',
      order: 2,
    },
  ];

  prefix;
  currentImage;
  imgSelected;

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log('teste');
  }

  ngOnInit(): void {
    this.prefix = this.fromPage === 'painel' ? 'Img' : null;
    this.imgSelected = this.prefix;
  }

  setImage(img: string) {
    this.currentImage = img;
  }
}
