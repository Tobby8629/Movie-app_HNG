"use client"

import Link from 'next/link'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { movies } from '../../Redux/movies/MovieSlice'
import { useRouter } from 'next/navigation'
import { Failed, Header, Loading, Search } from '../../../components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

function Searchpage({params}) {
   const movie = params.movie  
   const searchString = "%20"
   const newString = movie.replace(new RegExp(searchString, "g"), " ".repeat(1));
   const dispatch = useDispatch()
   useEffect(()=>{
    dispatch(movies())
   },[])
   const fetchmovie = useSelector((state)=> state.movies.movielist)
   const status = useSelector((state)=> state.movies.status)
   const moviess = fetchmovie?.filter((e)=> e.title.toLowerCase().includes(newString.toLowerCase()))
    
  return (
    <div className=' h-[100vh] w-full backdrop-blur-3xl bg-no-repeat overflow-scroll'>
     
    {status && <h2><Loading /></h2> }
    <section className='h-full'>
    {moviess?.length === 0 ?
       <Failed text="Sorry....couldn't find the requested image"/> :
      <div className=' p-2 md:p-5 '>
       <nav className='flex flex-row justify-between items-center my-3'>
        <a href='/' className="flex flex-row items-center">
        <img src='/tv.png' />
        <p className="left ml-2 text-white">Moviebox</p>
        </a>
   
        <a href='/' className='flex flex-row items-center w-10 h-10 bg-red-500 p-3 rounded-full  '>
          <FontAwesomeIcon icon={faTimes}  className='text-2xl text-white'/>
        </a>
      </nav>
        <section className=" grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 p-3 my-3 md:px-5 xl:px-20" data-testid = "movie-card">
          {moviess?.map((movie)=>(
            <Link href={`/movies/${movie.id}`} className=" w-11/12" key={movie.id}>
            <div className="w-full">
            <img src={`http://image.tmdb.org/t/p/w500//${movie.poster_path}`} className="w-full" data-testid="movie-poster"/>
            </div>
            <p className="text-gray-400 font-normal text-xs my-1 lg:font-bold" data-testid="movie-release-date">usa, {movie.release_date.split('').slice(0,4).join('')}</p>
            <h3 className="font-bold text-sm my-1 lg:text-lg" data-testid="movie-title">{movie.title}</h3>
            <ul className='flex flex-row justify-between my-1'>
            <li className=' flex items-center mr-2'>
                <div className='w-1/3 mr-2'>
                <img src='/imdb.png' className='w-full' />
                </div>
                <p className='text-xs text-gray-900'>{movie.vote_average*10}/100</p>
            </li> 
            <li className='flex items-center mr-2'>
                <div className='w-1/3 mr-2'>
                <img src='/apple.png' className='w-full' />
                </div>
                <p className='text-xs text-gray-900'>97%</p>
            </li>
            </ul>
            <p className='text-xs text-gray-400'>Action, Adventure, Horror</p>
            </Link>
          ))}
        </section>
        </div>
        }
      </section> 
    </div>
  )
}

export default Searchpage