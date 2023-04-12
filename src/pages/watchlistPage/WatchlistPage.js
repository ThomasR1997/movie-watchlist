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
  const getStorage = JSON.parse(localStorage.getItem("myData"));
  const [storage, setStorage] = useState(getStorage);

  const removeItem = (id) => {
    const newStorage = storage.filter((item) => item.id !== id);

    setStorage(newStorage);
    console.log("removed", storage);
  };

  useEffect(() => {
    localStorage.setItem(`myData`, JSON.stringify(storage));
  }, [storage]);

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
