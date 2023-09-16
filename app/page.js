"use client"

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movies } from "./Redux/movies/MovieSlice";
import { Failed, Footer, Header, Loading} from "../components";
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
  return (
    <main className="min-h-screen">
      {loading && <Loading />}
    
      {moviesss &&
      <>
        <Header  movies={moviesss} />
        <FeaturedCard movies={moviess}/>
        <Footer /> 
      </>
       }
 
       {failed && <Failed text="OOPS....couldn't find resource data" />}
    </main>
  )
}
