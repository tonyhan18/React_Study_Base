import { Item, List, PubDate, Title, UserRating, Image } from "../atoms";

const MovieList = ({ data }) => {
  return (
    <>
      <List>
        {data.map(({ image, title, pubDate, userRating, link }) => (
          <a href={link} key={link} target="_blank" rel="noreferrer">
            <Item>
              <Image src={image} />
              <Title dangerouslySetInnerHTML={{ __html: title }} />
              <PubDate>{pubDate}</PubDate> /{" "}
              <UserRating>{userRating}</UserRating>
            </Item>
          </a>
        ))}
      </List>
    </>
  );
};

export default MovieList;
