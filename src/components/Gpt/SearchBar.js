import React, { useRef } from "react";
import openai from "../../utils/openAI";
import { useDispatch } from "react-redux";
import { addGptQuery, addMovieRecommendation } from "../../utils/gptSlice";

const SearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const main = async () => {
    let query =
      "Name of movies for the following query:" +
      searchText.current.value +
      " Result should be in this format : 'Koi mil gya', 'Race 3', 'Birdbox' ";

    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: query }],
      model: "gpt-3.5-turbo",
    });

    return chatCompletion;
  };

  const onClickSearchHandler = async (e) => {
    try {
      e.preventDefault();
      const movieNamesFromGPT = await main();

      const movienames = movieNamesFromGPT.choices[0].message.content.split(',');
      console.log(movienames)
      dispatch(addMovieRecommendation(movienames));
      dispatch(addGptQuery(searchText.current.value));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="mt-24 p-5 bg-black z-40 relative w-9/12 mx-auto rounded-md">
      <form
        className="flex justify-evenly space-x-2"
        onSubmit={onClickSearchHandler}
      >
        <input
          ref={searchText}
          className="px-2 w-full py-2 rounded-md"
          type="text"
          placeholder="Enter the type of movue to search?"
        ></input>
        <button type="submit" className="bg-red-600 rounded-md text-white px-4">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
