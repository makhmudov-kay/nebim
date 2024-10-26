import { LanguageType } from "../../../configs/constants";



export class CurrentLanguageAction {
  /**
   *
   */
  static readonly type = 'Current language';

  /**
   *
   * @param currentLanguage
   */
  constructor(public currentLanguage: LanguageType) { }
}

