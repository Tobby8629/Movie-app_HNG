import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const FeaturedCard = ({movies}) => {
    return (
     <>
      <div className="flex justify-between items-center my-2 p-3 xl:px-10">
        <h2 className="font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl">Featured Movie</h2>
        <a href="" className="flex items-center text-rose-700">
          <p>see more</p>
          <FontAwesomeIcon icon={faAngleRight}  className="ml-1"/>
        </a>
      </div>
      <section className=" grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 p-3 mb-3 md:px-5 xl:px-10" data-testid = "movie-card">
        {
         movies.map((movie)=>(    
            <Link href={`movies/${movie.id}`} className=" w-11/12 my-4" key={movie.id}>
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
         ))
        }
      </section>
    </> 
     );
}
 
export default FeaturedCard;