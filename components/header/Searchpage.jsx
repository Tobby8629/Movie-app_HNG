"use client"

import Link from 'next/link'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { movies } from '../../app/Redux/movies/MovieSlice'

function Searchpage({open,text,setopen,fetchmovie}) {
  
   const moviess = fetchmovie.filter((e)=> e.title.toLowerCase() === text.toLowerCase())
   console.log(moviess)

    
  return (
    <>
    {open ? 
      <section className=' h-[100vh] w-full fixed top-0 bg-transparent backdrop-blur-3xl overflow-hidden'>
    
        {movies.length === 0 ?

        <div>
          <h2>could not find the movie requested</h2>
          <button onClick={()=> setopen(false)}>CLOSE</button>
        </div> :
        <section className=" grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 p-3 my-3 md:px-5 xl:px-20" data-testid = "movie-card">
          {moviess.map((movie)=>(
            <Link href={`movies/${movie.id}`} className=" w-11/12" key={movie.id}>
            <div className="w-full">
            <img src={`http://image.tmdb.org/t/p/w500//${movie.poster_path}`} className="w-full" data-testid="movie-poster"/>
            </div>
            <p className="text-gray-400 font-normal text-xs my-1 lg:font-bold" data-testid="movie-release-date">usa, {movie.release_date.split('').slice(0,4).join('')}</p>
            <h3 className="font-bold text-sm my-1 lg:text-lg" data-testid="movie-title">{movie.title}</h3>
            <ul className='flex flex-row justify-between my-1'>
            <li className=' flex items-center mr-2'>
                <div className='w-1/3 mr-2'>
                <img src='imdb.png' className='w-full' />
                </div>
                <p className='text-xs text-gray-900'>{movie.vote_average*10}/100</p>
            </li> 
            <li className='flex items-center mr-2'>
                <div className='w-1/3 mr-2'>
                <img src='apple.png' className='w-full' />
                </div>
                <p className='text-xs text-gray-900'>97%</p>
            </li>
            </ul>
            <p className='text-xs text-gray-400'>Action, Adventure, Horror</p>
            </Link>
          ))}
        </section>
        }
      </section>  : null
    }
    </>
  )
}

export default Searchpage