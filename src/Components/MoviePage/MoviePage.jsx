import { RiTimeLine } from "react-icons/ri";
import { formatDuration } from "../../utils/helpers/formatDuration";

import { BASEURL } from "../../utils/BASEURL";

const MoviePage = ({ movie }) => {
  return (
    <div className="w-full max-w-4xl border dark:border-none p-3 flex flex-col gap-5">
      <div className="flex flex-col sm:flex-row gap-5">
        <div>
          <img
            src={`${BASEURL}${movie?.attributes?.poster?.data?.attributes?.url}`}
            alt={`${movie?.attributes?.title} Poster`}
            className="w-[15rem] sm:w-[40rem]"
          />
        </div>
        <div className="flex flex-col items-start">
          <h1 className="text-3xl mb-2 text-indigo-900 dark:text-indigo-300">
            {movie?.attributes?.title}
          </h1>

          <h3 className="text-sm">
            {movie?.attributes?.releaseDate} ({movie?.attributes?.country})
          </h3>
          <p className="flex items-center gap-1 text-sm">
            <RiTimeLine />
            <span>{formatDuration(movie?.attributes?.duration)}</span>
          </p>
          <div className="text-4xl my-2 border-2 p-2 rounded text-orange-600">
            {movie?.attributes?.rating}
          </div>
          <div className="text-xs sm:text-sm indent-3">
            {movie?.attributes?.plot}
          </div>
        </div>
      </div>
      <div className="h-[5px] bg-indigo-200 rounded"></div>
      <div className="flex justify-center">
        <img
          src={`${BASEURL}${movie?.attributes?.featuredScene?.data?.attributes?.url}`}
          alt={`${movie?.attributes?.title} Feature Scene`}
          className=" w-[40rem]"
        />
      </div>
    </div>
  );
};

export default MoviePage;
