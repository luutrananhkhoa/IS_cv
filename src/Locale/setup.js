import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './en/index.json'
import dashboardIndexEn from './en/page/company/dashboard/index.json'
import dashboardMenuEn from './en/page/company/dashboard/menu.json'
import employeeCertificateEn from './en/page/company/dashboard/employeeCertificate.json'

import vn from './vi/index.json'
import dashboardIndexVi from './vi/page/company/dashboard/index.json'
import dashboardMenuVi from './vi/page/company/dashboard/menu.json'
import employeeCertificateVi from './vi/page/company/dashboard/employeeCertificate.json'


// the translations
const resources = {
  en: {
    translation: en,
    page: {
      company: {
        dashboard: {
          index: dashboardIndexEn,
          menu: dashboardMenuEn,
          employeeCertificate: employeeCertificateEn,
        },
      },
    },
  },
  vi: {
    translation: vn,
    page: {
      company: {
        dashboard: {
          index: dashboardIndexVi,
          menu: dashboardMenuVi,
          employeeCertificate: employeeCertificateVi,
        },
      },
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
