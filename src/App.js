import React from 'react'
import Accordion from './Components/Accodion'
import Search from './Components/Search'

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




export default  () => {
  return(
    <div>
      <Search />
    </div>
  )
}