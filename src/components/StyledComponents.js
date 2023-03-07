import styled from "styled-components";

import navImg from "../images/nav-img.png";

import { AiOutlineSearch } from "react-icons/ai";

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

export const StyledMessage = styled.h1`
  color: #dfdddd;
  font-size: 25px;
`;

export const SearchDiv = styled.div`
  position: relative;
  margin-top: -1.75em;
`;

export const SearchIcon = styled(AiOutlineSearch)`
  width: 24px;
  height: 24px;
  fill: gray;
`;

export const StyledSearch = styled.input`
  width: 50%;
  padding: 1em;
  border: #d1d5db 2px solid;
  border-radius: 10px 0 0 10px;
  color: #6b7280;
  font-size: 16px;
`;

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
