"use client"

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movies } from "./Redux/movies/MovieSlice";
import { Footer, Header, Searchpage } from "../components";
import FeaturedCard from "../components/card";

export default function Home() {
  const dispatch = useDispatch()
 useEffect(()=>{
    dispatch(movies())
  },[])
  const moviesss = useSelector((state)=> state.movies.movielist)
  const loading = useSelector((state)=> state.movies.status)
  const failed = useSelector((state)=> state.movies.failed)
  const moviess = moviesss?.slice(0,10)
  const [open, setopen] = useState(false)
  const [text, settext] = useState("")
  console.log(moviess)
  return (
    <main className="min-h-screen">
      {loading && "loading......"}
    
      {moviesss &&
      <>
        <Header  movies={moviesss} setopen={setopen} release={settext} />
        <FeaturedCard movies={moviess}/>
        <Footer /> 
        <Searchpage text={text} fetchmovie={moviess} setopen={setopen} open={open}/>
      </>
       }
 
       {failed && " could not find the resource"}
    </main>
  )
}
