import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-funko-detail-exclusive',
  templateUrl: './funko-detail-exclusive.component.html',
  styleUrls: ['./funko-detail-exclusive.component.less'],
})
export class FunkoDetailExclusiveComponent implements OnInit {
  @Input() funkoExclusive: string;

  badge: string;
  constructor() {}

  ngOnInit(): void {
    this.badge = this.getBadge();
  }

  getBadge(): string {
    if (this.funkoExclusive.toLowerCase().includes('diamond')) {
      return 'silver';
    }

    if (this.funkoExclusive.toLowerCase().includes('hot topic')) {
      return 'yellow';
    }

    if (this.funkoExclusive.toLowerCase().includes('px previews')) {
      return 'blue-light';
    }

    if (this.funkoExclusive.toLowerCase().includes('walmart')) {
      return 'blue';
    }

    return 'default';
  }
}
