import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './en/index.json'
import vn from './vi/index.json'
import dashboardVi from './vi/page/company/dashboard/index.json'
import custom from './vi/custom.json'

// the translations
const resources = {
  en: {
    translation: en,
    custom: custom,
  },
  vi: {
    translation: vn,
    custom: custom,
    page: {
      company: { dashboard: dashboardVi },
    },
  },
}

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: 'vi',
  debug: true,
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  react: {
    useSuspense: false,
  },
})

export default i18n
