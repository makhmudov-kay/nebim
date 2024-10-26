export type LanguageType = 'uz' | 'ru'

export class Constants {
  public static readonly Language = {
    uz: "O'ZB",
    ru: 'RU',
  };

  public static readonly DEFAULT_LANGUAGE: LanguageType = 'uz';

  //   LOCALTROAGE KEYS
  public static readonly LOCALSTORAGE_CURRENT_LANGUAGE = 'currentLanguage';
  public static readonly LOCALSTORAGE_CURRENT_CURRENCY = 'currentCurrency';

  // PREFIX
  public static readonly PHONE_PREFIX = '+998';
}
