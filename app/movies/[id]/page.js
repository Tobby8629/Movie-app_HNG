'use client'

import { Failed, Loading, Main, Sidebar } from "../../../components";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Detail } from "../../Redux/movies/MovieSlice";

const Details = ({params}) => {
  const id = params.id
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(Detail(id))
  },[])

  const detail = useSelector((state) => state.movies.detail)
  const status = useSelector((state) => state.movies.status)
  const failed = useSelector((state) => state.movies.failed)
  const [bar, setbar] = useState(false)
  
    return ( 
      <main className=" min-h-screen py-5 px-2">
        <button className="md:invisible absolute left-4 text-3xl" onClick={()=> setbar(true)}>
          <FontAwesomeIcon icon={faBars}/>
        </button> 
        {status && <Loading />}
        {detail && 
        <>
          <Sidebar bar={bar} setbar={setbar}/>
          <Main movie={detail}/>
        </>
        }

        {failed && <Failed text="failed to get resource" />}
      </main>
     );
}
 
export default Details;