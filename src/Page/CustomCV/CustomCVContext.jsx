import { createContext, useState, useRef } from 'react'
import { ItemTypes } from './ItemTypes'
import generate from '@helper/generate'
import { dataTypes } from './ItemTypes'
export const CustomCVContext = createContext()

const CustomCVContextProvider = ({ children }) => {
  const [doubleClick, setDoubleClick] = useState(false)

  const [leftTab, setLeftTab] = useState(0)

  const [layerGroupDimension, setLayerGroupDimension] = useState()
  const [list, setList] = useState({
    [generate(5)]: {
      type: dataTypes.box.type,
      name: 'Lorem1,...',
      top: 20,
      left: 80,
      width: 30,
      height: 10,
      borderRadius: 0,
    },
    [generate(5)]: {
      type: dataTypes.text.type,
      name: 'Lorem2...',
      top: 180,
      left: 20,
      width: 30,
      height: 10,
      borderRadius: 0,
      content: 'Drag me too',
    },
    [generate(5)]: {
      type: dataTypes.text.type,
      name: 'Lorem3,...',
      top: 180,
      left: 70,
      width: 30,
      height: 10,
      borderRadius: 0,
      content: 'Drag me too2',
    },
  })
  const [selected, setSelected] = useState()
  const data = {
    list,
    setList,
    selected,
    setSelected,
    doubleClick,
    setDoubleClick,
    layerGroupDimension,
    setLayerGroupDimension,
    leftTab,
    setLeftTab,
  }

  return <CustomCVContext.Provider value={data}>{children}</CustomCVContext.Provider>
}

export default CustomCVContextProvider
