import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';

import { Observable } from 'rxjs';
import { DataState } from '../shared/store/data/data.state';
import { LanguageType } from '../configs/constants';
import { CurrentLanguageAction } from '../shared/store/data/data.action';

@Injectable({ providedIn: 'root' })
export class Settings {

  get language() {
    return this.store.selectSnapshot(DataState.currentLanguage);
  }
  set language(v: LanguageType) {
    this.store.dispatch(new CurrentLanguageAction(v));
  }

  constructor(private store: Store) { }

  getLanguageObservable(): Observable<LanguageType> {
    return this.store.select(DataState.currentLanguage);
  }
}
