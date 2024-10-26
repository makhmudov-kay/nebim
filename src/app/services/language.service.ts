import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
export type Lang = 'uz' | 'ru';
@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  defaultLanguage: Lang = 'uz'
  currentLanguage: Lang = "uz"

  constructor(private translate: TranslateService) { }

  getCurrentLanguage() {
    const lang: Lang = localStorage.getItem('lang') as Lang;
    if (lang) {
      this.currentLanguage = lang
      return lang;
    }
    this.setCurrentLanguage(this.defaultLanguage);
    return this.defaultLanguage
  }

  setCurrentLanguage(lang: Lang) {
    localStorage.setItem('lang', lang);
    this.currentLanguage = lang
    this.translate.use(lang);
  }
}
