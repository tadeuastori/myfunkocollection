import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { BaseComponent } from '../base-component.component';

@Component({
  selector: 'app-funko-painel',
  templateUrl: './funko-painel.component.html',
  styleUrls: ['./funko-painel.component.less'],
})
export class FunkoPainelComponent
  extends BaseComponent
  implements OnInit, OnChanges
{
  funkoCollection: any;
  searchText: string = '';
  filteredCount = { count: 0 };
  total;
  displayAddNewFunko: boolean = true;

  currentEnvironment = environment;

  constructor(private router: Router) {
    super();
  }

  ngOnInit() {
    let stringJson = JSON.stringify(this.funkosDataDase);
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
    // if (this.filteredCount.count < 50) {
    //   this.itemsArray = [this.filteredCount.count];
    // }
  }

  goToFormPage() {
    this.router.navigate(['/add-funko']);
  }
}
