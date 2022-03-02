import styled from "styled-components";

const MovieList = ({ movies }) => {
  return (
    <List>
      {movies.map(({ image, title, pubDate, UserRating, link }, i) => (
        <Item key={i}>
          <a href={link} target={"_blank"} />
          <Image src={image} />
          <MovieTitle dangerouslySetInnerHTML={{ __html: title }} />
          <PubDate>{pubDate}</PubDate>
          <UserRatingCustome>{UserRating}</UserRatingCustome>
        </Item>
      ))}
    </List>
  );
};

const List = styled.ul`
  margin-top: 5px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`;
const Item = styled.li``;
const Image = styled.img`
  width: 100%;
`;
const MovieTitle = styled.p``;
const PubDate = styled.div``;
const UserRatingCustome = styled.div``;

export default MovieList;
