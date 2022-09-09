import MYCV from './CVCustom/Container'
import Default from './Default'

export const routes = {
  mycv: {
    name: 'My CV',
    element: <MYCV></MYCV>,
    to: 'mycv',
  },
  default: {
    name: 'Default CV',
    element: <Default></Default>,
    to: '',
  },
}
