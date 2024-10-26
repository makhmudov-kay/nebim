import { Component } from '@angular/core';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { Lang, LanguageService } from '../../services/language.service';
import { TranslateModule } from '@ngx-translate/core';
import { SvgUzbFlagComponent } from '../../shared/svg/svg-uzb-flag/svg-uzb-flag.component';
import { SvgRuFlagComponent } from '../../shared/svg/svg-ru-flag/svg-ru-flag.component';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzIconModule } from 'ng-zorro-antd/icon';

export interface LanguageList {
  label: Lang;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
  standalone: true,
  imports: [
    NzDropDownModule,
    TranslateModule,
    SvgUzbFlagComponent,
    SvgRuFlagComponent,
    NzDrawerModule,
    NzIconModule,
  ],
})
export class HeaderComponent {
  visible = false;
  readonly LANGUAGES: LanguageList[] = [{ label: 'ru' }, { label: 'uz' }];

  get currentLanguage() {
    return this.lang$.currentLanguage;
  }
  constructor(private lang$: LanguageService) {}

  setLanguage(lang: Lang) {
    this.lang$.setCurrentLanguage(lang);
  }

  close() {
    this.visible = false
  }
}
