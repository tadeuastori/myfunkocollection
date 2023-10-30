import { Component, Input, OnInit } from '@angular/core';
import { BaseComponent } from '../../pages/base-component.component';

@Component({
  selector: 'app-funko-detail-painel',
  templateUrl: './funko-detail-painel.component.html',
  styleUrls: ['./funko-detail-painel.component.less'],
})
export class FunkoDetailPainelComponent
  extends BaseComponent
  implements OnInit
{
  @Input() funkoDetails: any;
  @Input() idFunko: number;

  ngOnInit() {}
}
