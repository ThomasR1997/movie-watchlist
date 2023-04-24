import { useEffect, useState } from "react";
import {
  AddIcon,
  FlexDiv,
  MessageDiv,
  RemoveIcon,
  StyledButton,
  StyledDiv,
  StyledImage,
  StyledMessage,
  TitleDiv,
} from "../../components/StyledComponents";
import { NavLink } from "react-router-dom";

export const WatchlistPage = () => {
  // get local storage
  const getStorage = JSON.parse(localStorage.getItem("myData"));

  // set default storage state to getStorage
  const [storage, setStorage] = useState(getStorage);

  // remove selected item from list
  const removeItem = (id) => {
    // filters out selected item with id
    const newStorage = storage.filter((item) => item.id !== id);

    // set storage
    setStorage(newStorage);
  };

  // saves data to local storage when storage changes
  useEffect(() => {
    localStorage.setItem(`myData`, JSON.stringify(storage));
  }, [storage]);

  // Shows a message if storage is empty
  if (storage < 1) {
    return (
      <div>
        <MessageDiv>
          <StyledMessage>
            Your watchlist is looking a little empty...
          </StyledMessage>

          <NavLink style={style} to="/">
            <FlexDiv>
              <AddIcon />
              <p>Let's add some movies!</p>
            </FlexDiv>
          </NavLink>
        </MessageDiv>
      </div>
    );
  } else {
    return storage.map((item, index) => {
      return (
        <StyledDiv key={index}>
          <StyledImage src={item.poster} />

          <TitleDiv>
            <h1>{item.title}</h1>
          </TitleDiv>

          <StyledButton onClick={() => removeItem(item.id)}>
            <RemoveIcon /> Remove
          </StyledButton>
        </StyledDiv>
      );
    });
  }
};

let style = {
  textDecoration: "none",
  color: "black",
};
