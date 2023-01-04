import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-funko-painel-items-per-page',
  templateUrl: './funko-painel-items-per-page.component.html',
  styleUrls: ['./funko-painel-items-per-page.component.less'],
})
export class FunkoPainelItemsPerPageComponent implements OnInit, OnChanges {
  @Input() totalItems: number;
  itemsPerPage = 5;
  itemsArray = [5, 15, 25, 50];

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {}

  get perPage() {
    return this.itemsPerPage;
  }
}
