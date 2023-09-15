'use client'
import React, { useEffect, useState } from 'react'
import { Search } from '..'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Header({movies,release,setopen}) {
    const [screen, setscreen] = useState(false)
    const fetchVotes = movies.map((e) => e.vote_count)
    const highest =  Math.min(...fetchVotes)
    const popular = movies.find((e)=> e.vote_count === highest)
    useEffect(()=>{
      const resizee = () => {
        window.innerWidth >= 768 ? setscreen(true) : setscreen(false) 
      }
      resizee()
      window.addEventListener('resize', resizee)
    },[])
  return (
    <main className="header bg-cover bg-center h-[50vh] md:h-[70vh] p-2 py-4 md:px-10 lg:px-16"
           style={{backgroundImage: `url(http://image.tmdb.org/t/p/w500/${popular.backdrop_path})`
  }}
    >
      <nav className='flex flex-row justify-between items-center'>
        <div className="flex flex-row items-center">
        <img src='/tv.png' />
        {screen ? <p className="left ml-2 text-white">Moviebox</p> : null}
        </div>
        <Search open={setopen} release={release}/> 
        <div className='flex flex-row items-center'>
          {screen ? <p className='mr-2 text-white'>Sign in</p>: null}
          {screen ? <FontAwesomeIcon icon={faBars}  className='bg-red-500 p-2 rounded-full text-lg text-white'/> : null}
        </div>
      </nav>
      <section className='flex flex-col h-full flex-1 justify-center text-white sm:w-10/12 md:w-6/12 lg:w-3.5/12'>
        <h2 className='  text-2xl w-2/3 lg:w-full  capitalize mb-1 md:text-3xl lg:text-5xl'> {popular.title}</h2>
        <ul className='flex flex-row mb-1 '>
          <li className=' flex items-center my-1 mr-2'>
            <div className='w-1/3 mr-2'>
              <img src='imdb.png' className='w-full' />
            </div>
            <p className='text-xs md:text-sm '>{popular.vote_average*10}/100</p>
          </li> 
          <li className='flex items-center mr-2'>
            <div className='w-1/3 mr-2'>
              <img src='apple.png' className='w-full' />
            </div>
            <p className='text-xs md:text-sm'>97%</p>
          </li>
        </ul>
        <p className='text-xs md:text-sm my-1 '>
          {popular.overview}
        </p>
      </section>
    </main>
  )
}

export default Header