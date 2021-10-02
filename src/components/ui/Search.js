import React, {useState} from 'react'

const Search = ({getQuery}) => {//getQuery is from app
const [text, setText] = useState('')
const onChange = (q) => {  //q is = to e.target.value
  setText(q)
  getQuery(q)//Passing q to app and will be used as a query in are fetch request
}


  return (
    <section className='search'>
      <form>
        <input 
        type="text"
         className='form-control' 
         placeholder='Search characters'
          autoFocus value={text} 
          onChange={(e) => onChange(e.target.value)}
          />{/*Type into input, run on change, whats typed gets passed into input */}
      </form>
    </section>
  )
}

export default Search
