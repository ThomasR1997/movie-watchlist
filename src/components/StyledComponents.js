import styled from "styled-components";

import navImg from "../images/nav-img.png";

import { AiOutlineSearch } from "react-icons/ai";

import { IoMdAddCircle, IoMdRemoveCircle } from "react-icons/io";

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

export const MessageDiv = styled.div`
  margin: 10em;
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

  position: absolute;
  top: 25%;
  padding-left: 1em;
`;

export const StyledSearch = styled.input`
  width: 50%;
  padding: 1em 3em;
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

export const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 4em;
  margin: 0 10em;
  border-bottom: #e5e7eb solid 3px;
`;

export const StyledImage = styled.img`
  width: 20%;
  margin-right: 2em;
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: white;
  cursor: pointer;
`;

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
