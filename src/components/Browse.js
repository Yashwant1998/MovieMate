import React from "react";
import { Header } from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GPTSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  useNowPlayingMovies();
  const showGptSearch = useSelector((store) => store.gptSearch.showGptSearch);

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
