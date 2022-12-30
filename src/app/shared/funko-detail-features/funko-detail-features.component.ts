import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-funko-detail-features',
  templateUrl: './funko-detail-features.component.html',
  styleUrls: ['./funko-detail-features.component.less'],
})
export class FunkoDetailFeaturesComponent implements OnInit {
  @Input() funkoFeature: string;

  badge: string;
  constructor() {}

  ngOnInit(): void {
    this.badge = this.getBadge();
  }

  getBadge(): string {
    if (this.funkoFeature.toLowerCase().includes('metallic')) {
      return 'silver';
    }

    if (this.funkoFeature.toLowerCase().includes('glow')) {
      return 'yellow';
    }

    if (this.funkoFeature.toLowerCase().includes('glitter')) {
      return 'green';
    }

    return 'default';
  }
}
