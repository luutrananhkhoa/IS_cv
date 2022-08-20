const A4RATIO = 210 / 297
const width = 500
const height = Math.round(width / A4RATIO)
const top = 60
export const BOARDDIMENSION = {
  width,
  height,
  top,
}

export const optionsFont = [
  { value: 'Roboto', label: 'Roboto' },
  { value: 'Arial', label: 'Arial' },
  { value: 'Calibri', label: 'Calibri' },
]

export const optionsFontWeight = [
  { value: 'lighter', label: 'Lighter' },
  { value: 'normal', label: 'Normal' },
  { value: 'bold', label: 'Bold' },
  { value: 'bolder', label: 'Bolder' },
]

export const optionsFontSize = [
  { value: 10, label: '10' },
  { value: 11, label: '11' },
  { value: 12, label: '12' },
  { value: 13, label: '13' },
  { value: 14, label: '14' },
  { value: 15, label: '15' },
  { value: 16, label: '16' },
]

export const defaultComponent = {
  text: {
    width: 200,
    height: 50,
    lock: false,
    visible: '',
    lock: false,
    borderRadius: 0,
    fontFamily: optionsFont.find((o) => o.value == 'Roboto'),
    fontSize: optionsFontSize.find((o) => o.value == 12),
    fontWeight: optionsFontWeight.find((o) => o.value == 'normal'),
    lineHeight: 30,
    letterSpacing: 0,
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: '',
    color: {
      hex: '#000000',
      rgb: {
        r: 0,
        g: 0,
        b: 0,
      },
      hsv: {
        h: 0,
        s: 0,
        v: 0,
      },
    },
    background: {
      hex: '#FFFFFF',
      rgb: {
        r: 255,
        g: 255,
        b: 255,
      },
      hsv: {
        h: 0,
        s: 0,
        v: 100,
      },
    },
  },
  box: { width: 200, height: 50, borderRadius: 0 },
}
