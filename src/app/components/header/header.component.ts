import { Component } from '@angular/core';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { Lang, LanguageService } from '../../services/language.service';
import { TranslateModule } from '@ngx-translate/core';

export interface LanguageList {
  label: Lang
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [NzDropDownModule, TranslateModule]
})
export class HeaderComponent {

  readonly LANGUAGES: LanguageList[] = [
    { label: 'ru' },
    { label: 'uz' },
  ]

  get currentLanguage() {
    return this.lang$.currentLanguage;
  }
  constructor(private lang$: LanguageService) { }

  setLanguage(lang: Lang) {
    this.lang$.setCurrentLanguage(lang);
  }
}
