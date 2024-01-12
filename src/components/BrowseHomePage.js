import Header from "./Session/Header";

import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import MainController from "./MainController";
import SecondaryController from "./SecondaryController/SecondaryController";

const BrowseHomePage = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div className="flex flex-col">
      <Header />
      <MainController />
      <SecondaryController />
    </div>
  );
};

export default BrowseHomePage;
