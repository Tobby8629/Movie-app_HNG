'use client'

import { Main, Sidebar } from "../../../components";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useSelector } from "react-redux";

const Details = ({params}) => {
    const Movies = useSelector((state)=> state.movies.movielist)
    const id = params.id
    const movie = Movies.find((m)=> m.id.toString() === id)
    const [bar, setbar] = useState(false)
    return ( 
      <main className=" min-h-screen py-5 px-2">
        <button className="md:invisible absolute left-4 text-3xl" onClick={()=> setbar(true)}>
          <FontAwesomeIcon icon={faBars}/>
        </button> 
        <Sidebar bar={bar} setbar={setbar}/>
        <Main movie={movie}/>
      </main>
     );
}
 
export default Details;