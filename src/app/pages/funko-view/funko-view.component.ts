import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from '../base-component.component';

@Component({
  selector: 'app-funko-view',
  templateUrl: './funko-view.component.html',
  styleUrls: ['./funko-view.component.less'],
})
export class FunkoViewComponent extends BaseComponent implements OnInit {
  itemId: string;
  loadedFunko: any;

  constructor(private route: ActivatedRoute, private router: Router) {
    super();
    this.getParameter();
    this.loadingItem();
  }

  ngOnInit(): void {}

  getParameter() {
    this.route.queryParams.subscribe((params) => {
      this.itemId = params['item'];
    });
  }

  loadingItem() {
    const listFunko = this.loadFunkoList();

    this.loadedFunko = listFunko.find(
      (filter) => filter.uniqueId === this.itemId
    );
  }

  voltarPagina() {
    this.router.navigate(['']);
  }
}
