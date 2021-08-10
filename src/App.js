import React from 'react'
import Accordion from './Components/Accodion'


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




export default () => {
  return(
    <div>
      <Accordion items={items} />
    </div>
  )
}