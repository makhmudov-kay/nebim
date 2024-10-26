import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { DataStateModel } from './data-state.model';
import { Constants, LanguageType } from '../../../configs/constants';
import { CurrentLanguageAction } from './data.action';


@State<DataStateModel>({
  name: 'data',
  defaults: {
    currentLanguage:
      (localStorage.getItem(
        Constants.LOCALSTORAGE_CURRENT_LANGUAGE
      ) as LanguageType) || Constants.DEFAULT_LANGUAGE,
  },
})
@Injectable()
export class DataState {
  /**
   *
   * @param state State model
   */
  @Selector()
  static currentLanguage(state: DataStateModel) {
    return state.currentLanguage;
  }

  /**
   *
   * @param ctx
   * @returns
   */
  @Action(CurrentLanguageAction)
  setCurrentLanguage(
    ctx: StateContext<DataStateModel>,
    action: CurrentLanguageAction
  ) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      currentLanguage: action.currentLanguage,
    });

    localStorage.setItem(
      Constants.LOCALSTORAGE_CURRENT_LANGUAGE,
      action.currentLanguage
    );
  }
}
