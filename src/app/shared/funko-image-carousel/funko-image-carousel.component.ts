import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ImageModelBase64Enum } from '../../data/image-model-base-64.enum';

@Component({
  selector: 'app-funko-image-carousel',
  templateUrl: './funko-image-carousel.component.html',
  styleUrls: ['./funko-image-carousel.component.less'],
})
export class FunkoImageCarouselComponent implements OnInit, OnChanges {
  @Input() funkoImages: any;
  @Input() idFunko: number;
  @Input() fromPage: string;

  useBase64: boolean = true;

  imageModel = [
    {
      name: 'model-box.jpeg',
      base64: ImageModelBase64Enum.ModelBox,
      order: 1,
    },
    {
      name: 'model-funko.jpeg',
      base64: ImageModelBase64Enum.ModelFunko,
      order: 2,
    },
  ];

  prefix;
  currentImage;
  imgSelected;

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {}

  ngOnInit(): void {
    this.prefix = this.fromPage === 'painel' ? 'Img' : null;
    this.imgSelected = this.prefix;
  }

  setImage(img: string) {
    this.currentImage = img;
  }

  imageToDisplay(item: any) {
    let returnImage = '';

    if (!this.useBase64) {
      returnImage =
        'assets/image/funko/' +
        (this.funkoImages.length == 0 ? 'model/' : '') +
        item.name;
    } else {
      returnImage = 'data:image/jpeg;base64,' + item.base64;
    }

    return returnImage;
  }
}
