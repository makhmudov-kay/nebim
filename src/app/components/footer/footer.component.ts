import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NzIconModule, NzIconService } from 'ng-zorro-antd/icon';
import { NzIconLiterals } from '../../configs/icons-literal.config';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less'],
  standalone: true,
  imports: [NzIconModule, TranslateModule],
})
export class FooterComponent implements OnInit {
  year = new Date().getFullYear();

  constructor(nzIconService: NzIconService) {
    nzIconService.addIconLiteral('icon:tg', NzIconLiterals.icons.tg);
  }

  ngOnInit() {}
}
