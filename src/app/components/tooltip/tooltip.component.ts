import { Component, Input } from '@angular/core';

@Component({
  selector: 'tooltip-provider',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
})
export class TooltipComponent {
  @Input() tip: string = '';
  @Input() direction: 'top' | 'left' | 'bottom' | 'right' = 'top';
}
