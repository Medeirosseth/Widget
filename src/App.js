import React, { useState }from 'react'
import Accordion from './Components/Accodion'
import Search from './Components/Search'
import DropDown from './Components/Dropdown'

const items = [ 
  {
    title: 'What is react?',
    content: 'React is a fron end javascript framework'
  },
  {
    title: 'Why use React',
    content: 'its a favriot among developers'
  },
  {
    title: 'How do you use React',
    content: 'Creating components'
  }
]

const options = [
  {
    label: 'The color red',
    Value: 'Red'
  },
  {
    label: 'The color Green',
    Value: 'Green'
  },
  {
    label: 'Shade of Blue',
    Value: 'Blue'
  }
]




export default  () => {
  const [selected, setSelected] = useState(options[0]);



  return(
    <div>
      <DropDown 
      selected={selected}
      onSelectedChange={setSelected}
      options={options}
      />
    
    </div>
  )
}