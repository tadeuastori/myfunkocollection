import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-funko-painel-pagination',
  templateUrl: './funko-painel-pagination.component.html',
  styleUrls: ['./funko-painel-pagination.component.less'],
})
export class FunkoPainelPaginationComponent implements OnInit, OnChanges {
  @Input() funkosLength: number;
  @Input() itemsPerPage: number;

  activePage = 0;
  pages: any;

  totalPages;
  lastPage;
  firstPage = 1;

  constructor() {}

  ngOnInit(): void {
    this.totalPages = Math.ceil(
      Math.round(this.funkosLength / this.itemsPerPage)
    );
    this.totalPages = this.totalPages == 0 ? 1 : this.totalPages;
    this.lastPage = this.totalPages - 1;

    this.pages = Array(6)
      .fill(0)
      .map((_x, i) => i);
    this.pages.pop();
  }

  get currentPage() {
    return this.activePage;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.totalPages = Math.ceil(
      Math.round(this.funkosLength / this.itemsPerPage)
    );

    this.totalPages = this.totalPages == 0 ? 1 : this.totalPages;
    this.activePage = 0;
    this.lastPage = this.totalPages - 1;
    const qtdarray = this.totalPages < 6 ? this.totalPages + 1 : 6;

    this.pages = Array(qtdarray)
      .fill(0)
      .map((_x, i) => i);
    this.pages.pop();
  }

  changePages(page: number) {
    this.activePage = page;

    if (this.totalPages > 5 && page + 1 > 3) {
      const totalArray = this.totalPages - (page + 1);
      const numbPag = totalArray >= 2 ? page - 2 : this.totalPages - 5;

      this.pages = Array(6)
        .fill(0)
        .map((_x, i) => i + numbPag);
      this.pages.pop();
    } else {
      const qtdarray = this.totalPages < 6 ? this.totalPages + 1 : 6;

      this.pages = Array(qtdarray)
        .fill(0)
        .map((_x, i) => i);
      this.pages.pop();
    }
  }
}
