import {
  SearchButton,
  SearchDiv,
  SearchIcon,
  StyledMessage,
  StyledSearch,
} from "../../components/StyledComponents";

import movieIcon from "../../images/Icon.png";

export const LandingPage = () => {
  return (
    <div>
      <SearchDiv>
        <SearchIcon />
        <StyledSearch placeholder="Search for a movie" />
        <SearchButton>Search</SearchButton>
      </SearchDiv>

      {/* <img src={movieIcon} alt="" />
      <StyledMessage>Start exploring</StyledMessage> */}

      {/* <StyledMessage>
        Unable to find what you're looking for.
        <br />
        Please try another search.
      </StyledMessage> */}
    </div>
  );
};
