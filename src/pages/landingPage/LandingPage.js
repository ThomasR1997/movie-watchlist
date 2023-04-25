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
  TitleDiv,
} from "../../components/StyledComponents";

import movieImg from "../../images/Icon.png";

export const LandingPage = () => {
  // API
  const [data, setData] = useState();

  // User input
  const [search, setSearch] = useState("");

  // local storage
  const [storage, setStorage] = useState([]);

  // State for "added to watchlist" message
  const [msg, setMsg] = useState({});

  // Gets API with search results
  const fetchData = async (callback) => {
    const response = await fetch(
      `https://www.omdbapi.com/?s=${search}&apikey=ac42c6f0`
    );

    const data = await response.json();

    callback(data);
  };

  // Sets state to search input
  const handleChange = () => {
    setSearch(document.getElementById("ye").value);
  };

  // Click handler for search button
  const handleClick = () => {
    // Calling fetchData
    fetchData(setData);
  };

  // only saves to local storage if storage is NOT empty
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
          data.Search.map((item, index, e) => {
            const addToList = () => {
              setStorage([
                ...storage,
                { id: uuidv4(), poster: item.Poster, title: item.Title },
              ]);

              setMsg((prev) => ({
                ...msg,
                [index]: !prev[index],
              }));

              setTimeout(() => {
                setMsg((prev) => ({
                  ...msg,
                  [index]: !prev[index],
                }));
              }, 1000);
            };

            return (
              <StyledDiv key={index}>
                <StyledImage src={item.Poster} />
                <div>
                  <TitleDiv>
                    <h1>{item.Title}</h1>
                    <p style={msg[`${index}`] ? activeStyle : style}>
                      Added to watchlist
                    </p>
                  </TitleDiv>

                  <StyledButton
                    onClick={() => addToList(item.Poster, item.Title, e)}
                  >
                    <AddIcon />
                    Watchlist
                  </StyledButton>
                </div>
              </StyledDiv>
            );
          })}
      </div>
    );
  } else if (data && !data.Search) {
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
          <StyledMessage>
            Unable to find what you're looking for. Please try another search.
          </StyledMessage>
        </MessageDiv>
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

let style = {
  display: "none",
};

let activeStyle = {
  display: "block",
};
