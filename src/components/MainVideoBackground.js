import React from "react";
import { useSelector } from "react-redux";

const MainVideoBackground = () => {
  const movies = useSelector((store) => store.moviesSlice);

  const movieTrailer = movies?.movieVideos?.filter((movie) => movie.type === "Trailer");

  if (!movieTrailer) {
    return <div>No trailer available</div>;
  }

  console.log("movieTrailer",movieTrailer)
 
  return (
    <div className="pointer-events-none w-full">
      <iframe
        className="h-screen w-screen min-h-fit aspect-video "
        src={`https://www.youtube.com/embed/${movieTrailer[0].key}?autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        muted
      ></iframe>
    </div>
  );
};

export default MainVideoBackground;
