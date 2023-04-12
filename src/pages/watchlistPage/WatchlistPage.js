import { useEffect, useState } from "react";
import {
  MessageDiv,
  RemoveIcon,
  StyledButton,
  StyledDiv,
  StyledImage,
  StyledMessage,
} from "../../components/StyledComponents";

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
        </MessageDiv>
      </div>
    );
  } else {
    return storage.map((item, index) => {
      return (
        <StyledDiv key={index}>
          <StyledImage src={item.poster} />
          <h1>{item.title}</h1>
          <StyledButton onClick={() => removeItem(item.id)}>
            <RemoveIcon /> Remove
          </StyledButton>
        </StyledDiv>
      );
    });
  }
};
