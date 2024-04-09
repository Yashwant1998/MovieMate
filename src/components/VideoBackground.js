import React from "react";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";
import ShimmerUI from "./ShimmerUI";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);
  const trailerVideo = useSelector((state) => state.movies.trailer);
  if (!trailerVideo) return <ShimmerUI />;
  return (
    <div className="w-full">
      <iframe
        className="w-full aspect-video overflow-hidden"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media;
        gyroscope; picture-in-picture; web-share"></iframe>
    </div>
  );
};

export default VideoBackground;
