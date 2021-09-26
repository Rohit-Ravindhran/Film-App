import I18n from 'i18n-js';
import * as RNLocalize from 'react-native-localize';

// const locales = RNLocalize.getLocales();

// if (Array.isArray(locales)) {
//   console.log('locales', locales);
//   I18n.locale = locales[0].languageTag;
// }

I18n.locale = 'en';

export const setLocale = locale => {
  I18n.locale = locale;
};

export const getCurrentLocale = () => I18n.locale;

I18n.fallbacks = true;

export default I18n;
