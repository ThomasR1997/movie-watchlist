import {
  SearchButton,
  SearchDiv,
  SearchIcon,
  StyledSearch,
} from "../../components/StyledComponents";

export const LandingPage = () => {
  return (
    <div>
      <SearchDiv>
        <SearchIcon />
        <StyledSearch placeholder="Search for a movie" />
        <SearchButton>Search</SearchButton>
      </SearchDiv>
    </div>
  );
};
