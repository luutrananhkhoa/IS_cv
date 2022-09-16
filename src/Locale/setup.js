import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './en/index.json'
import dashboardIndexEn from './en/page/company/dashboard/index.json'
import dashboardMenuEn from './en/page/company/dashboard/menu.json'
import employeeCertificateEn from './en/page/company/dashboard/employeeCertificate.json'

import vn from './vi/index.json'
import dashboardIndexVi from './vi/page/dashboard/index.json'
import employeeCertificateVi from './vi/page/dashboard/employeeCertificate.json'
import headerVi from './vi/component/header/index.json'

import homeVi from './vi/page/home/index.json'
import postItemVi from './vi/component/postItem/index.json'
import morePanelVi from './vi/component/morePanel/index.json'
import settingVi from './vi/page/setting/index.json'
import settingPersonalVi from './vi/page/setting/personal.json'
import postDashboardVi from './vi/page/dashboard/posts.json'
import personalLayoutVi from './vi/layout/personal/index.json'
import aboutPageVi from './vi/page/about/index.json'
import toastVi from './vi/component/toast/index.json'
import layoutSocialVi from './vi/layout/social'
import iigPostsPageVi from './vi/page/posts/left/iig.json'
import registerPageVi from './vi/page/register/index.json'
import loginPageVi from './vi/page/login/index.json'
import createPostDashboardPageVi from './vi/page/dashboard/createPost.json'

// the translations
const resources = {
  en: {
    translation: en,
    page: {},
  },
  vi: {
    translation: vn,
    page: {
      home: homeVi,
      dashboard: {
        index: dashboardIndexVi,
        employeeCertificate: employeeCertificateVi,
        posts: postDashboardVi,
        createPost: createPostDashboardPageVi,
      },
      setting: {
        index: settingVi,
        personal: settingPersonalVi,
      },
      about: {
        index: aboutPageVi,
      },
      posts: {
        left: {
          iig: iigPostsPageVi,
        },
      },
      register: {
        index: registerPageVi,
      },
      login: {
        index: loginPageVi,
      },
    },
    component: {
      header: {
        index: headerVi,
      },
      postItem: {
        index: postItemVi,
      },
      morePanel: {
        index: morePanelVi,
      },
      toast: {
        index: toastVi,
      },
    },
    layout: {
      social: {
        index: layoutSocialVi,
      },
      personal: {
        index: personalLayoutVi,
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
