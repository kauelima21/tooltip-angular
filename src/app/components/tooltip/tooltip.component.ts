import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
})
export class TooltipComponent {
  @Input() tip: string = '';
  @Input() direction: 'top' | 'left' | 'bottom' | 'right' = 'top';
}
