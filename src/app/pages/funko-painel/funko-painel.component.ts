import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-funko-painel',
  templateUrl: './funko-painel.component.html',
  styleUrls: ['./funko-painel.component.less'],
})
export class FunkoPainelComponent implements OnInit, OnChanges {
  funkoCollection: any;
  funkoss = require('../../data/data-base.json');
  searchText: string = '';
  filteredCount = { count: 0 };
  itemsPerPage = 5;
  itamsPerPageArray = [5, 15, 25, 50];

  ngOnInit() {
    let stringJson = JSON.stringify(this.funkoss);
    const listFunko: any[] = JSON.parse(stringJson);

    this.funkoCollection = listFunko.sort((a, b) => {
      const nameA = a.collection.toUpperCase(); // ignore upper and lowercase
      const nameB = b.collection.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      return 0;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.filteredCount.count);
    if (this.filteredCount.count < 5) {
      this.itamsPerPageArray = [this.filteredCount.count];
    }
  }
}
