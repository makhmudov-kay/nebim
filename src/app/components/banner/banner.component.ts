import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  standalone: true,
  imports: [TranslateModule],
})
export class BannerComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
