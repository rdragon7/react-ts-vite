import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import zh from './zh.json'
import en from './en.json'

const resources = {
  en: {
    translation: en
  },
  zh: {
    translation: zh
  }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    debug: true,
    fallbackLng: 'zh',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
