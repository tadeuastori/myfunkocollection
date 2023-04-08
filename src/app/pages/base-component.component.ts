import { Directive, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

// @Component({
//   template: '',
// })
@Directive()
export abstract class BaseComponent implements OnDestroy {
  destroy$ = new Subject<void>();

  funkosDataDase = require('../data/data-base-new.json');

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
