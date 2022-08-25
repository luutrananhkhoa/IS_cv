import ImagePreview from './RightPanel/Design/ImagePreview'
import Dimension from './RightPanel/Design/Dimension'
import Style from './RightPanel/Design/Style'
import Text from './RightPanel/Design/Text'
import Icon from './RightPanel/Design/Icon'

export const dataTypes = {
  text: {
    type: 'text',
    icon: 'fa-regular fa-text',
  },
  box: {
    type: 'box',
    icon: 'fa-solid fa-layer-group',
  },
  image: {
    type: 'image',
    icon: 'fa-solid fa-image',
  },
  icon: {
    type: 'icon',
    icon: 'fa-solid fa-icons',
  },
}
export const designTabComponents = [
  {
    type: dataTypes.text.type,
    components: [<Dimension key={0}></Dimension>, <Text key={1}></Text>, <Style key={2}></Style>],
  },
  {
    type: dataTypes.box.type,
    components: [<Dimension key={0}></Dimension>, <Style key={1}></Style>],
  },
  {
    type: dataTypes.image.type,
    components: [<ImagePreview key={0}></ImagePreview>, <Dimension key={1}></Dimension>],
  },
  {
    type: dataTypes.icon.type,
    components: [<Icon key={0}></Icon>, <Dimension key={1}></Dimension>],
  },
]
