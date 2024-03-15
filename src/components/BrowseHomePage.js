import Header from "./Session/Header";

import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import MainController from "./MainController";
import SecondaryController from "./SecondaryController/SecondaryController";
import { useSelector } from "react-redux";
import GptHomePage from "./Gpt/GptHomePage";
import { Outlet } from "react-router-dom";
import MovieDetails from "./MovieDetails/MovieDetails";

const BrowseHomePage = () => {
  const gpt = useSelector((store) => store.gptSlice);
  const movieDetails = useSelector((store) => store.movieDetailsSlice);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div className="flex flex-col">
      <Header />
      {!gpt.showGptPage && (
        <>
          {!movieDetails.show ? (
            <>
              {" "}
              <MainController />
              <SecondaryController />
            </>
          ) : (
            <MovieDetails />
          )}
        </>
      )}
      {gpt.showGptPage && <GptHomePage />}
    </div>
  );
};

export default BrowseHomePage;
