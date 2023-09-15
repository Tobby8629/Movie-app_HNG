import { faAngleDown, faAppleAlt, faBarsProgress, faPlay, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Main = ({movie}) => {
    return ( 
      <main className="pt-10 pd-5 px-3 md:p-5 md:w-8.5/12 md:ml-auto lg:w-3/4 lg:ml-auto xl:w-10/12">
        <div className="relative h-[33vh] md:h-[40vh] lg:h-[55vh]">
          <div className="h-full">
            <img src="/poster.png" alt="poster-image" className="rounded-2xl h-full"/>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white opacity-50 rounded-full w-20 h-20 text-center flex items-center justify-center">
            <FontAwesomeIcon icon={faPlay} className=" text-3xl"/>
          </div>
        </div>
        <div>
        <div className="flex flex-row justify-between item-center mt-5 mb-3">
          <div className="md:flex md:items-center">
            <ul className="flex list-inside flex-row">
              <li className="xl:text-lg text-xs lg:text-sm font-semibold">{movie?.title}</li>
              <li className="xl:text-lg lg:ml-3 font-semibold text-xs ml-2 lg:text-sm list-disc">{movie?.release_date}</li>
              <li className="xl:text-lg lg:ml-3 font-semibold text-xs ml-2 lg:text-sm list-disc">PG-2</li>
              <li className="xl:text-lg lg:ml-3 font-semibold text-xs ml-2 lg:text-sm list-disc">2h 10m</li>
            </ul>
            <div className="flex text-rose-700  mt-2 md:mt-0 md:ml-2">
              <p className="text-xs font-semibold mr-2 border-1 border-gray-300 rounded-xl p-2">Action</p>
              <p className="text-xs font-semibold border-1 border-gray-300 rounded-xl p-2">Drama</p>
            </div>
          </div>
          <FontAwesomeIcon icon={faStar}  color="gold"/>
        </div>
        </div>
        <div className="md:flex md:justify-between">
          <div className="md:w-8/12 md:mx-1 lg:w-7/12">
            <p className="xl:text-lg text-xs leading-5">
              {movie?.overview}
            </p>
            <ul className=" xl:text-lg text-xs font-medium">
              <li className="my-2">
                Director : <span className="text-rose-700">Joseph Kosinski</span>
              </li>
              <li className="my-2">
                Writers :<span className="text-rose-700">Jim Cash, Jack Epps Jr,  Peter Craig</span>
              </li>
              <li className="my-2">
                 Stars :  <span className="text-rose-700">Tom Cruise, Jennifer Connelly, Miles Teller </span>
              </li>
              <li className="my-3 flex">
                <button className=" py-2  md:text-0.5 px-1 xl:text-lg lg:p-3 w-5/12 block bg-rose-700 rounded-md text-white">Top rated movies #65</button>
                <button className=" py-2 xl:text-lg lg:p-3 -translate-x-1 w-7/12 rounded-r-md border-b-1 border-r-1 border-t-1 border-gray-500 flex justify-between px-3 items-center">
                  <p>Awards 9 nominations</p>
                  <FontAwesomeIcon icon={faAngleDown}/>
                </button>
              </li>
            </ul>
          </div>
          <div className=" flex flex-col md:w-4/12 lg:w-5/12">
            <button className=" xl:text-lg xl:p-3 flex bg-rose-700 text-white p-2 text-xs rounded-md justify-center items-center">
              <FontAwesomeIcon className="mr-2" icon={faAppleAlt}/>
              <p>See sometimes</p>
            </button>
            <button className=" xl:text-lg xl:p-2 flex justify-center items-center bg-rose-100 border-1 border-rose-700 mt-2 rounded-md p-2 text-xs">
              <FontAwesomeIcon className="mr-2" icon={faBarsProgress}/>
              <p>More watch option</p>
            </button>
          </div>
        </div>
        
      </main>
     );
}

export default Main;