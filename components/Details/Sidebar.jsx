"use client"
import { faBars, faCalendar, faHome, faTimes, faTv, faVideoCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = ({bar, setbar}) => {
    return ( 
      <nav className={`md:fixed h-screen z-20 backdrop-blur-3xl absolute w-full ${bar ? 'left-0' : '-left-full'} transition-all top-0 md:left-0 md:w-3.5/12 md:bg-white md:rounded-r-3xl md:border-r-1 md:border-gray-400 lg:w-2.8/12 xl:w-2/12 xl:py-8`}>
        <div className=" h-5.5/6 px-4 py-5 flex flex-col md:h-full md:py-8 justify-between">
        <div className="flex flex-row items-center">
        <img src='/tv.png' />
        <p className="left ml-2 text-white md:text-black">Moviebox</p> 
        </div>
        <ul className="my-3">
          <li >
           <a className="flex items-center my-5 text-lg" href="/">
            <FontAwesomeIcon icon={faHome} />
            <p className="ml-3">Home</p>
           </a>
          </li>
          <li >
           <a className="flex items-center my-5 text-lg" href="">
            <FontAwesomeIcon icon={faVideoCamera} />
            <p className="ml-3">movies</p>
           </a>
          </li>
          <li >
           <a className="flex items-center my-5 text-lg" href="">
            <FontAwesomeIcon icon={faTv} />
            <p className="ml-3">Tv series</p>
           </a>
          </li>
          <li >
           <a className="flex items-center my-5 text-lg" href="">
            <FontAwesomeIcon icon={faCalendar} />
            <p className="ml-3">upcoming</p>
           </a>
          </li>
        </ul>
        <div className="flex flex-col">
            <div className="my-3 w-6/12 bg-red-100 px-5 pt-7 pb-3 border-1 border-red-500 rounded-3xl md:w-10/12 lg:px-3 lg:pt-5 xl:mb-10">
            <div>
            <h3 className="text-sm font-medium py-2">
                Play movie quizes and earn free tickets
            </h3>
            <p className="text-xs font-medium text-gray-500 my-2"> 
                50k people are playing now
            </p>
            </div>
            {/* <button className={`text-xs text-rose-900 bg-rose-300 px-4 py-2 rounded-3x ${bar ? 'left-0' : '-left-full}`}}> */}
            <button className={`text-xs text-rose-900 bg-rose-300 px-4 py-2 rounded-3xl`}>
                start playing
            </button>
            </div>
            <button className="md:invisible absolute right-4 top-2 text-4xl" onClick={()=> setbar(false)}>
            <FontAwesomeIcon icon={faTimes}/>
            </button> 
            <button className="my-3 bg-gray-700 text-white p-2 rounded-lg">
                logout
            </button>
        </div>
        </div>
      </nav>
     );
}
 
export default Sidebar;