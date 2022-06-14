import styled from "styled-components";

const WatchlistItem = ({ data, index }) => {
  return (
    <Container>
      {data && (
        <SubContainer>
          <ListImage src={data[index].image} />
          <Title>{data[index].title}</Title>
        </SubContainer>
      )}
    </Container>
  );
};

const Container = styled.div`
  height: 60%;
  padding: 10px;
  display: flex;
`;

const SubContainer = styled.div`
  height: 100%;
  padding: 0px;
  display: grid;
  margin: 0;
  width: 100%;
`;

const Title = styled.div`
  color: white;
  font-size: 15px;
  position: relative;
  padding-top: 10px;
  right: 5px;
  width: 50%;
`;

const ListImage = styled.img`
  width: 30%;
  height: 100%;
`;

export default WatchlistItem;
