import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { WINDOW } from '../../configs/window.token';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less'],
  standalone: true,
  imports: [NzTimelineModule, TranslateModule],
})
export class AboutComponent implements OnInit {
  leftPosition = false;

  stories = [
    {
      label: '1966',
      text: 'about.history-1',
    },
    { label: '1977', text: 'about.history-2' },
    {
      label: '1981',
      text: 'about.history-3',
    },
    { label: '1995', text: 'about.history-4' },
    {
      label: '1997',
      text: 'about.history-5',
    },
    { label: '2000', text: 'about.history-6' },
    { label: '2011', text: 'about.history-7' },
  ];

  constructor(@Inject(WINDOW) private window: Window) {}

  ngOnInit(): void {
    this.window.innerWidth < 768
      ? (this.leftPosition = true)
      : (this.leftPosition = false);
  }

  @HostListener('window:resize', ['$event'])
  onResize(e: any) {
    e.target.innerWidth < 768
      ? (this.leftPosition = true)
      : (this.leftPosition = false);
  }
}
