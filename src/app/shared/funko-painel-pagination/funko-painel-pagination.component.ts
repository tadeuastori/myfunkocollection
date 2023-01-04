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
  qtdBaseArray = 5;
  totalPages;
  lastPage;
  firstPage = 0;

  constructor() {}

  async ngOnInit(): Promise<void> {
    await this.loadPagination();
  }

  async ngOnChanges(changes: SimpleChanges): Promise<void> {
    await this.loadPagination();
  }

  get currentPage() {
    return this.activePage;
  }

  async loadPagination(page: any = null) {
    this.totalPages = Math.ceil(this.funkosLength / this.itemsPerPage);
    this.totalPages = this.totalPages == 0 ? 1 : this.totalPages;
    this.lastPage = this.totalPages - 1;
    this.activePage = page ? page : 0;
    let qtdArray = this.qtdBaseArray;
    let numbPag = 0;

    if (page && this.totalPages > this.qtdBaseArray && page > 2) {
      const totalArray = this.totalPages - page;
      numbPag = totalArray > 2 ? page - 2 : this.totalPages - this.qtdBaseArray;
      qtdArray = this.qtdBaseArray;
    } else {
      qtdArray =
        this.totalPages < this.qtdBaseArray
          ? this.totalPages
          : this.qtdBaseArray;
    }

    this.pages = Array(qtdArray + 1)
      .fill(0)
      .map((_x, i) => i + numbPag);
    this.pages.pop();
  }
}
