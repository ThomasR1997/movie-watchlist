import { useState } from "react";
import {
  SearchButton,
  SearchDiv,
  SearchIcon,
  StyledSearch,
} from "../../components/StyledComponents";

export const LandingPage = () => {
  const [data, setData] = useState();
  const [search, setSearch] = useState("");

  const fetchData = async (callback) => {
    const response = await fetch(
      `http://www.omdbapi.com/?s=${search}&apikey=ac42c6f0`
    );

    // http://www.omdbapi.com/?s=${search}&apikey=ac42c6f0
    // http://www.omdbapi.com/?apikey=[ac42c6f0]&s=${search}

    // http://www.omdbapi.com/?i=${id}&apikey=ac42c6f0

    const data = await response.json();

    callback(data);
  };

  const handleChange = () => {
    setSearch(document.getElementById("ye").value);
    console.log(search);
  };

  const handleClick = () => {
    fetchData(setData);
    console.log(data.Search);
  };

  return (
    <div>
      <SearchDiv>
        <SearchIcon />
        <StyledSearch
          id="ye"
          onChange={() => handleChange()}
          placeholder="Search for a movie"
        />
        <SearchButton onClick={() => handleClick()}>Search</SearchButton>
      </SearchDiv>

      <div>
        {data &&
          data.Search.map((item, index) => {
            return (
              <div key={index}>
                <h1>{item.Title}</h1>
                <img src={item.Poster} alt="" />
              </div>
            );
          })}
      </div>
    </div>
  );
};
