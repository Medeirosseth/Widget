// import React, { useState, useEffect } from 'react'
// import axios from 'axios'

// const Search = () => {

// const [userInput, setUserInput] = useState('');

// useEffect(() => {
//   const search = async () => {
//     await axios.get('https://en.wikipedia.org/w/api/php',{ 
//     params: {
//       action: 'query',
//       list: 'search',
//       origin: '*',
//       format: 'json',
//       srsearch: userInput
//     }
//   });
// };

//   search();
// }, [userInput])

//   return (
//     <div>
//       <div className="ui form">
//         <div className='field'>
//           <label> Search Field</label>
//           <input
//           value={userInput}
//           onChange={e => setUserInput(e.target.value)}
//           className="input" 
//           placeholder="Search"
//           />
//         </div>
//       </div>
//     </div>

//   )
// }



// export default Search;