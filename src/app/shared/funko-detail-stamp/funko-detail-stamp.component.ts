import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-funko-detail-stamp',
  templateUrl: './funko-detail-stamp.component.html',
  styleUrls: ['./funko-detail-stamp.component.less'],
})
export class FunkoDetailStampComponent implements OnInit {
  @Input() funkoStamp: string;

  badge: string;
  constructor() {}

  ngOnInit(): void {
    this.badge = this.getBadge();
  }

  getBadge(): string {
    if (this.funkoStamp.toLowerCase().includes('metallic')) {
      return 'silver';
    }

    if (this.funkoStamp.toLowerCase().includes('glow')) {
      return 'yellow';
    }

    if (this.funkoStamp.toLowerCase().includes('glitter')) {
      return 'green';
    }

    if (this.funkoStamp.toLowerCase().includes('px previews')) {
      return 'blue-light';
    }

    if (this.funkoStamp.toLowerCase().includes('walmart')) {
      return 'blue';
    }

    return 'default';
  }
}
