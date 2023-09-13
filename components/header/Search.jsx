import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


function Search() {
  return (
    <form className=' bg-transparent p-1 border-2 border-white rounded-lg flex items-center justify-center sm:w-9/12 md:w-1/2'>
      <input placeholder='what do you want to search ?'  className='w-full mr-2 bg-transparent outline-none text-white text-base'/>
      <button>
        <FontAwesomeIcon icon={faSearch} color='white'/>
      </button>
    </form>
  )
}

export default Search