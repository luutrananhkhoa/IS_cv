import React, { useState, useContext } from 'react'
import styles from './styles.module.scss'
import Select from 'react-select'
import clsx from 'clsx'
import { CustomCVContext } from '../../../CustomCVContext'
import { optionsFont, optionsFontWeight, optionsFontSize } from '../../../config'
import update from 'immutability-helper'

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

export default function Index(props) {
  const { list, setList, selected, linkColor, setLinkColor } = useContext(CustomCVContext)

  return (
    <>
      {list[selected] && (
        <div className={styles.container}>
          <div className={styles.title}>Text</div>
          <div className={styles.wrapper}>
            <Select
              styles={customStyles}
              menuPlacement="auto"
              value={list[selected].fontFamily}
              onChange={(e) => {
                setList(update(list, { [selected]: { $merge: { fontFamily: e } } }))
              }}
              options={optionsFont}
              //   onFocus={() => console.log('focus')}
              className={styles.font}
            />
            <div className={styles.font2}>
              <Select
                styles={customStyles}
                menuPlacement="auto"
                value={list[selected].fontWeight}
                onChange={(e) => {
                  setList(update(list, { [selected]: { $merge: { fontWeight: e } } }))
                }}
                options={optionsFontWeight}
                className={styles.fontWeight}
              />
              <Select
                styles={customStyles}
                menuPlacement="auto"
                value={list[selected].fontSize}
                onChange={(e) => {
                  setList(update(list, { [selected]: { $merge: { fontSize: e } } }))
                }}
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
                  value={list[selected].lineHeight}
                  onChange={(e) => {
                    setList(
                      update(list, {
                        [selected]: { $merge: { lineHeight: parseInt(e.target.value) } },
                      })
                    )
                  }}
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
                  value={list[selected].letterSpacing}
                  onChange={(e) => {
                    setList(
                      update(list, {
                        [selected]: { $merge: { letterSpacing: parseInt(e.target.value) } },
                      })
                    )
                  }}
                ></input>
              </div>

              <span
                onClick={() => {
                  setList(
                    update(list, {
                      [selected]: {
                        $merge: {
                          textDecoration:
                            list[selected].textDecoration == 'underline' ? '' : 'underline',
                        },
                      },
                    })
                  )
                }}
                className={clsx(styles.item, styles.underline, {
                  [styles.active]: list[selected].textDecoration == 'underline',
                })}
              >
                <label className="fa-thin fa-underline"></label>
                <div className={styles.underlineText}>Underline</div>
              </span>
            </div>
            <div className={styles.font4}>
              <div className={styles.item}>
                <span
                  onClick={() => {
                    setList(
                      update(list, { [selected]: { $merge: { justifyContent: 'flex-start' } } })
                    )
                  }}
                  className={clsx('fa-thin fa-align-left', {
                    [styles.active]: list[selected].justifyContent == 'flex-start',
                  })}
                ></span>
                <span
                  onClick={() => {
                    setList(update(list, { [selected]: { $merge: { justifyContent: 'center' } } }))
                  }}
                  className={clsx('fa-thin fa-align-center', {
                    [styles.active]: list[selected].justifyContent == 'center',
                  })}
                ></span>
                <span
                  onClick={() => {
                    setList(
                      update(list, { [selected]: { $merge: { justifyContent: 'flex-end' } } })
                    )
                  }}
                  className={clsx('fa-thin fa-align-right', {
                    [styles.active]: list[selected].justifyContent == 'flex-end',
                  })}
                ></span>
              </div>
              <div className={styles.item}>
                <span
                  onClick={() => {
                    setList(update(list, { [selected]: { $merge: { alignItems: 'flex-start' } } }))
                  }}
                  className={clsx('fa-thin fa-objects-align-top', {
                    [styles.active]: list[selected].alignItems == 'flex-start',
                  })}
                ></span>
                <span
                  onClick={() => {
                    setList(update(list, { [selected]: { $merge: { alignItems: 'center' } } }))
                  }}
                  className={clsx('fa-thin fa-objects-align-center-vertical', {
                    [styles.active]: list[selected].alignItems == 'center',
                  })}
                ></span>
                <span
                  onClick={() => {
                    setList(update(list, { [selected]: { $merge: { alignItems: 'flex-end' } } }))
                  }}
                  className={clsx('fa-thin fa-objects-align-bottom', {
                    [styles.active]: list[selected].alignItems == 'flex-end',
                  })}
                ></span>
              </div>
            </div>
            <div className={styles.font5}>
              <div className={clsx(styles.item)}>
                <div className={styles.colorText}>Color</div>
                <div
                  style={{
                    background: list[selected].color.hex,
                  }}
                  className={styles.colorBox}
                ></div>
                <i
                  onClick={() => {
                    if (selected == linkColor.id && linkColor.for == 'color') {
                      setLinkColor({})
                    } else {
                      setLinkColor({ id: selected, for: 'color' })
                    }
                  }}
                  className={clsx('fa-thin fa-link-horizontal', {
                    [styles.active]: selected == linkColor.id && linkColor.for == 'color',
                  })}
                ></i>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
