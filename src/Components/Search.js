import React, { useState, useEffect } from 'react'

const Search = () => {

const [userInput, setUserInput] = useState('');

useEffect(() => {
  console.log('huhuhuh')
}, [userInput])

  return (
    <div>
      <div className="ui form">
        <div className='field'>
          <label> Search Field</label>
          <input
          value={userInput}
          onChange={e => setUserInput(e.target.value)}
          className="input" 
          placeholder="Search"
          />
        </div>
      </div>
    </div>

  )
}



export default Search;