import styled from "styled-components";
import axios from "axios";

import { useEffect, useState } from "react";
import HighlightItem from "./highlight";
import ListItem from "./list";

const NowPlaying = () => {
  const [data, setData] = useState([]);
  const [dataLength, setDataLength] = useState(0);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    async function fetch() {
      await axios
        .get("https://imdb-api.com/en/API/ComingSoon/k_7h2yfpz1")
        .then((res) => {
          setData(res.data.items);
          setDataLength(res.data.items.length);
        });
    }
    fetch();
  }, []);

  const handleIncrement = () => {
    index === dataLength - 1 ? setIndex(0) : setIndex(index + 1);
  };

  const handleDecrement = () => {
    index === 0 ? setIndex(dataLength - 1) : setIndex(index - 1);
  };

  //   const handleLoop = () => {
  //     let temp = index + 1;
  //     return (
  //       <>
  //         <ListItem
  //           imageUrl={data[temp % dataLength].image}
  //           fullTitle={data[temp % dataLength].fullTitle}
  //         />
  //         <ListItem
  //           imageUrl={data[(temp + 1) % dataLength].image}
  //           fullTitle={data[(temp + 1) % dataLength].fullTitle}
  //         />
  //         <ListItem
  //           imageUrl={data[(temp + 2) % dataLength].image}
  //           fullTitle={data[temp + (2 % dataLength)].fullTitle}
  //         />
  //       </>
  //     );
  //   };

  return (
    <SC>
      <CSDiv>
        <H1>Coming Soon</H1>
      </CSDiv>

      <Container>
        <Highlight>
          {dataLength && (
            <HighlightItem
              imageUrl={data[index].image}
              fullTitle={data[index].fullTitle}
            />
          )}
          <div>
            <button onClick={handleDecrement}>{"<"}</button>
            <button onClick={handleIncrement}>{">"}</button>
          </div>
        </Highlight>
        {dataLength && (
          <List>
            <ListItem
              imageUrl={data[(index + 1) % dataLength].image}
              fullTitle={data[(index + 1) % dataLength].fullTitle}
            />
            <ListItem
              imageUrl={data[(index + 2) % dataLength].image}
              fullTitle={data[(index + 2) % dataLength].fullTitle}
            />
            <ListItem
              imageUrl={data[(index + 3) % dataLength].image}
              fullTitle={data[(index + 3) % dataLength].fullTitle}
            />
          </List>
        )}
      </Container>
    </SC>
  );
};

const SC = styled.div`
  display: grid;
  background-color: black;
`;

const CSDiv = styled.div`
  height: 50px;
  padding-left: 12%;
`;

const H1 = styled.h2`
  color: gold;
`;

const Container = styled.div`
  background-color: black;
  height: 70vh;
  /* padding-top: 0px; */
  padding-left: 10%;
  padding-right: 10%;
  padding-bottom: 30px;
  display: flex;
`;

const Highlight = styled.div`
  background-color: black;
  width: 70%;
`;

const List = styled.div`
  background-color: black;
  width: 30%;
`;

export default NowPlaying;
