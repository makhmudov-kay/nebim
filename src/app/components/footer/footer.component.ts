import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less'],
  standalone: true,
  imports: [NzIconModule, TranslateModule]
})
export class FooterComponent implements OnInit {
  year = new Date().getFullYear()

  constructor() { }

  ngOnInit() {
  }

}
