import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-funko-detail-painel',
  templateUrl: './funko-detail-painel.component.html',
  styleUrls: ['./funko-detail-painel.component.less'],
})
export class FunkoDetailPainelComponent implements OnInit {
  @Input() funkoDetails: any;
  @Input() idFunko: number;

  ngOnInit() {}
}
