import React, { useState } from 'react'
import styles from './styles.module.scss'
import Select from 'react-select'
import clsx from 'clsx'

const optionsFont = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
]

const optionsFontWeight = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
]

const optionsFontSize = [
  { value: '10', label: '10' },
  { value: '11', label: '11' },
  { value: '12', label: '12' },
]

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px solid #e5e6e6',
    //   color: state.isSelected ? 'red' : 'blue',
    padding: 20,
    height: 10,
    // background: 'black',
    display: 'flex',
    alignItems: 'center',
  }),
  menu: (provided, state) => ({
    ...provided,
    // width: state.selectProps.width,
    // borderBottom: '1px dotted pink',
    borderRadius: '5px',
    color: state.selectProps.menuColor,
    // padding: 20,
  }),
  control: (_, { selectProps: { onFocus } }) => ({
    // none of react-select's styles are passed to <Control />
    // width: 200,
    // color={}
    display: 'flex',
    borderRadius: '5px',
    height: 30,
    border: '1px solid #e5e6e6',
    alignItems: 'center',
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1
    const transition = 'opacity 300ms'

    return { ...provided, opacity, transition }
  },
}

export default function Index() {
  const [font, setFont] = useState()
  const [fontWeight, setFontWeight] = useState()
  const [fontSize, setFontSize] = useState()
  const [lineHeight, setLineHeight] = useState()
  const [letterSpacing, setLetterSpacing] = useState()
  const [textAlign, setTextAlign] = useState()
  const handleChangeFont = (e) => {
    setFont(e)
  }
  const handleChangeFontWeight = (e) => {
    setFontWeight(e)
  }
  return (
    <div className={styles.container}>
      <div className={styles.title}>Text</div>
      <div className={styles.wrapper}>
        <Select
          styles={customStyles}
          menuPlacement="auto"
          value={font}
          onChange={handleChangeFont}
          options={optionsFont}
          //   onFocus={() => console.log('focus')}
          className={styles.font}
        />
        <div className={styles.font2}>
          <Select
            styles={customStyles}
            menuPlacement="auto"
            value={fontWeight}
            onChange={handleChangeFontWeight}
            options={optionsFontWeight}
            className={styles.fontWeight}
          />
          <Select
            styles={customStyles}
            menuPlacement="auto"
            value={fontSize}
            onChange={() => setFontSize(e)}
            options={optionsFontSize}
            className={styles.fontSize}
          />
        </div>
        <div className={styles.font3}>
          <div className={styles.item}>
            <label htmlFor="lineheight" className={'fa-thin fa-line-height'}></label>
            <input
              type="number"
              name="lineheight"
              id="lineheight"
              value={lineHeight}
              onChange={(e) => setLineHeight(e.target.value)}
            ></input>
          </div>
          <div className={styles.item}>
            <label htmlFor="letterspacing">
              <svg
                className={clsx('svg', styles.svg)}
                width={16}
                height={12}
                viewBox="0 0 16 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 12V0h1v12H0zm15 0V0h1v12h-1z"
                  fillRule="nonzero"
                  fillOpacity={1}
                  fill="#000"
                  stroke="none"
                />
                <path
                  d="M4.548 10l2.8-8h1.304l2.8 8h-.954l-.7-2H6.202l-.7 2h-.954zM8 2.862L9.448 7H6.552L8 2.862z"
                  fillRule="evenodd"
                  fillOpacity={1}
                  fill="#000"
                  stroke="none"
                />
              </svg>
            </label>
            <input
              type="number"
              name="letterspacing"
              id="letterspacing"
              value={letterSpacing}
              onChange={(e) => setLetterSpacing(e.target.value)}
            ></input>
          </div>
        </div>
        <div className={styles.font4}>
          <div className={styles.item}>
            <span className={'fa-thin fa-align-left'}></span>
            <span className={'fa-thin fa-align-center'}></span>
            <span className={'fa-thin fa-align-right'}></span>
          </div>
          <div className={styles.item}>
            <span>
              <svg
                className="svg"
                width={16}
                height={16}
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 1H1v1h14V1zM8.354 3.646L8 3.293l-.354.353-3 3 .708.708L7.5 5.207V13h1V5.207l2.146 2.147.708-.708-3-3z"
                  fillRule="evenodd"
                  fillOpacity={1}
                  fill="#000"
                  stroke="none"
                />
              </svg>
            </span>
            <span>
              <svg
                className="svg"
                width={16}
                height={16}
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 6.207l.354-.353 2-2-.708-.708L8.5 4.293V0h-1v4.293L6.354 3.146l-.708.708 2 2L8 6.207zm0 3.586l.354.353 2 2-.708.708L8.5 11.707V16h-1v-4.293l-1.146 1.147-.708-.708 2-2L8 9.793zM1 8.5h14v-1H1v1z"
                  fillRule="evenodd"
                  fillOpacity={1}
                  fill="#000"
                  stroke="none"
                />
              </svg>
            </span>
            <span>
              <svg
                className="svg"
                width={16}
                height={16}
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.354 12.354L8 12.707l-.354-.353-3-3 .708-.708L7.5 10.793V3h1v7.793l2.146-2.147.708.708-3 3zM15 14v1H1v-1h14z"
                  fillRule="evenodd"
                  fillOpacity={1}
                  fill="#000"
                  stroke="none"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
