import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  MessageDiv,
  SearchButton,
  SearchDiv,
  SearchIcon,
  StyledDiv,
  StyledImage,
  StyledMessage,
  StyledSearch,
  AddIcon,
  StyledButton,
} from "../../components/StyledComponents";

import movieImg from "../../images/Icon.png";

export const LandingPage = () => {
  // API
  const [data, setData] = useState();

  // User input
  const [search, setSearch] = useState("");

  const [storage, setStorage] = useState([]);

  // APi with user input
  // const [searchData, setSearchData] = useState([]);

  // Gets API with search results
  const fetchData = async (callback) => {
    const response = await fetch(
      `http://www.omdbapi.com/?s=${search}&apikey=ac42c6f0`
    );

    const data = await response.json();

    callback(data);
  };

  // Sets state to search input
  const handleChange = () => {
    setSearch(document.getElementById("ye").value);
  };

  // Array for storing imdbID for searched movies
  // let idArray = [];

  // let myArr = [];

  // Click handler for search button
  const handleClick = () => {
    // Calling fetchData
    fetchData(setData);

    // Storing imdbID of search in an array
    // data &&
    //   data.Search.map((e) => {
    //     return idArray.push(e.imdbID);
    //   });

    // console.log("id array", idArray);

    // Running fetchDataInfo() on each imdbID in the array
    // idArray.map((e) => fetchDataInfo(e));

    // console.log("my array", myArr);
    // console.log("state", searchData);
  };

  // Function for fetching API for each imdbID
  // const fetchDataInfo = async (props) => {
  //   const response = await fetch(
  //     `http://www.omdbapi.com/?i=${props}&apikey=ac42c6f0`
  //   );

  //   const data = await response.json();

  //   // myArr.push(data);
  //   setSearchData([...searchData, data]);
  // };

  if (storage.length !== 0) {
    localStorage.setItem(`myData`, JSON.stringify(storage));
  }

  if (data && data.Search) {
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

        {data &&
          data.Search.map((item, index) => {
            const addToList = () => {
              setStorage([
                ...storage,
                { id: uuidv4(), poster: item.Poster, title: item.Title },
              ]);
              console.log("added", storage);
            };

            return (
              <StyledDiv key={index}>
                <StyledImage src={item.Poster} />
                <div>
                  <h1>{item.Title}</h1>
                  <StyledButton
                    onClick={() => addToList(item.Poster, item.Title)}
                  >
                    <AddIcon />
                    Watchlist
                  </StyledButton>
                </div>
              </StyledDiv>
            );
          })}

        {/* {searchData &&
          searchData.map((e, i) => {
            return (
              <div key={i}>
                <img src={e.Poster} alt="" />
                <h1>
                  {e.Title} {e.Ratings[0].value}
                </h1>
                <h4>{e.Runtime}</h4>
                <h4>{e.Genre}</h4>
                <p>{e.Plot}</p>
              </div>
            );
          })} */}
      </div>
    );
  } else {
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

        <MessageDiv>
          <img src={movieImg} alt="" />
          <StyledMessage>Start Exploring</StyledMessage>
        </MessageDiv>
      </div>
    );
  }
};
