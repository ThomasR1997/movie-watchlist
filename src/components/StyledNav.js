import { StyledNavDiv } from "./StyledComponents";
import { NavLink, Route, Routes } from "react-router-dom";
import { LandingPage } from "../pages/landingPage/LandingPage";
import { WatchlistPage } from "../pages/watchlistPage/WatchlistPage";

export const StyledNav = () => {
  return (
    <>
      <StyledNavDiv>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : style)}
          to="/landing-page"
        >
          Search for movies
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : style)}
          to="/watchlist-page"
        >
          My Watchlist
        </NavLink>
      </StyledNavDiv>

      <Routes>
        <Route path="/landing-page" element={<LandingPage />} />
        <Route path="/watchlist-page" element={<WatchlistPage />} />
      </Routes>
    </>
  );
};

let style = {
  fontWeight: "700",
  fontSize: "20px",
  textDecoration: "none",
  color: "white",
};

let activeStyle = {
  fontWeight: "900",
  fontSize: "50px",
  color: "white",
  textDecoration: "none",
};
