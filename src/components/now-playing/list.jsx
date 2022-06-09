import styled from "styled-components";

const ListItem = ({ imageUrl, fullTitle }) => {
  return (
    <Container>
      <ListImage src={imageUrl} />
      <Title>{fullTitle}</Title>
    </Container>
  );
};

const Container = styled.div`
  height: 23%;
  padding: 20px;
`;

const Title = styled.div`
  color: white;
`;

const ListImage = styled.img`
  width: 90%;
  height: 100%;
`;

export default ListItem;
