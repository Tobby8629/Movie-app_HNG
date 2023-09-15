"use client"

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movies } from "./Redux/movies/MovieSlice";
import { Footer, Header } from "../components";
import FeaturedCard from "../components/card";

export default function Home() {
  const dispatch = useDispatch()
 useEffect(()=>{
    dispatch(movies())
  },[])
  const moviesss = useSelector((state)=> state.movies.movielist)
  const loading = useSelector((state)=> state.movies.status)
  const moviess = moviesss.slice(0,10)
  console.log(moviess)
  return (
    <main className="min-h-screen">
      {loading ? "loading......" :
      <>
      
      <Header  movies={moviesss} />
      <FeaturedCard movies={moviess}/>
      <Footer /> 
      </>
       }
    </main>
  )
}
