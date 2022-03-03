import { Item, List, Title, Image } from "../atoms";
import { Link } from "react-router-dom";

const BookList = ({ data }) => {
  return (
    <>
      <List>
        {data.map(({ image, title, isbn }) => (
          <Link key={isbn} to={`/book/:${isbn.split(" ")[1]}`}>
            <Item>
              <Image src={image} />
              <Title dangerouslySetInnerHTML={{ __html: title }} />
            </Item>
          </Link>
          // <a href={link} key={link} target="_blank" rel="noreferrer">
        ))}
      </List>
    </>
  );
};

export default BookList;
