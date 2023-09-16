"use client"
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'


function Search() {
  const [text, settext] = useState('')
  const route = useRouter()
  const findtext = (e) => {
    e.preventDefault()
    route.push(`search/${text}`, text) 
  }
  return (
    <form onSubmit={(e) => findtext(e)} className=' bg-transparent p-1 border-2 border-white rounded-lg flex items-center justify-center sm:w-9/12 md:w-1/2 md:p-3'>
      <input placeholder='what do you want to search ?' onChange={(e)=>settext(e.target.value)}  className='w-full mr-2 bg-transparent outline-none text-white text-base'/>
      <button type="submit">
        <FontAwesomeIcon icon={faSearch} color='white'/>
      </button>
    </form>
  )
}

export default Search