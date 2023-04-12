import styled from "styled-components";

import navImg from "../images/nav-img.png";

import { AiOutlineSearch } from "react-icons/ai";

import { IoMdAddCircle, IoMdRemoveCircle } from "react-icons/io";

// Styling for navbar
export const StyledNavDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-image: url(${navImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: #0e0e0e;

  padding: 5em;
`;

// Div for empty search and watchlist
export const MessageDiv = styled.div`
  margin: 10em;
`;

// Message for empty search and watchlist
export const StyledMessage = styled.h1`
  color: #dfdddd;
  font-size: 25px;
`;

// Styling for search bar div
export const SearchDiv = styled.div`
  position: relative;
  margin-top: -1.75em;
`;

// Styling for search icon
export const SearchIcon = styled(AiOutlineSearch)`
  width: 24px;
  height: 24px;
  fill: gray;

  position: absolute;
  top: 25%;
  padding-left: 1em;
`;

// Styling for search input
export const StyledSearch = styled.input`
  width: 50%;
  padding: 1em 3em;
  border: #d1d5db 2px solid;
  border-radius: 10px 0 0 10px;
  color: #6b7280;
  font-size: 16px;
`;

// Styling for search button
export const SearchButton = styled.button`
  padding: 1em 3em;
  background-color: white;
  color: #374151;
  font-size: 16px;
  border-radius: 0 10px 10px 0;
  border: #d1d5db 2px solid;
  border-left: none;
  cursor: pointer;
`;

// Container for each search result
export const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 4em;
  margin: 0 10em;
  border-bottom: #e5e7eb solid 3px;
`;

// Container for search result image
export const StyledImage = styled.img`
  width: 20%;
  margin-right: 2em;
`;

// Styling for add to/remove from watclist button
export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: white;
  cursor: pointer;
`;

// Icons
export const AddIcon = styled(IoMdAddCircle)`
  width: 24px;
  height: 24px;
  margin-right: 0.5em;
`;

export const RemoveIcon = styled(IoMdRemoveCircle)`
  width: 24px;
  height: 24px;
  margin-right: 0.5em;
`;
