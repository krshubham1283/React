import {ChangeEvent, FormEvent, useState} from "react";
import './SearchBar.css'

interface SearchBarProps {
  onSubmit: (term: string) => void
}

function SearchBar(props: SearchBarProps) {

  const [term, setTerm] = useState('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value)
  }

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault()
    props.onSubmit(term)
  }

  return (
    <div className='search-bar'>
      <form onSubmit={handleFormSubmit}>
        <label>Search Term</label>
        <input type="text" onChange={handleChange} value={term}/>
      </form>
    </div>
  )
}

export default SearchBar
