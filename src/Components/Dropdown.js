import {React, useState} from 'react'


const DropDown = () => {  
  const [selection, setSelection] = useState();

  return (
    <div>
      <select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
    </div>
  )
}

export default DropDown