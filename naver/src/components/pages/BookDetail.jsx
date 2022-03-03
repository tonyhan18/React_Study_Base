import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { getBookDetail } from "../../apis/book";

const BookDetail = () => {
  const navigate = useNavigate();
  const [book, setBook] = useState({});
  const { isbn } = useParams();
  const {
    image,
    title,
    author,
    publisher,
    price,
    discount,
    pubdate,
    description,
  } = book;

  const searchBookDetail = useCallback(async () => {
    const { items } = await getBookDetail(isbn);
    setBook(items[0]);
    // console.log(items);
    // console.log(items[0]);
    //navigate("/");
  }, [isbn]);

  useEffect(() => {
    searchBookDetail();
  }, [isbn, searchBookDetail]);

  return (
    <>
      <Image src={image} />
      <Title>{title}</Title>
      <Author>{author}</Author>
      <Publisher>{publisher}</Publisher>
      <Price>
        가격: {(+price).toLocaleString()} / {(+discount).toLocaleString()}
      </Price>
      <PubDate>출간일: {pubdate}</PubDate>
      <Description>{description}</Description>
    </>
  );
};

const Image = styled.img`
  margin: 5% auto;
  height: 300px;
`;
const Title = styled.h2``;
const Author = styled.h4``;
const Publisher = styled.h4``;

const PubDate = styled.p``;
const Price = styled.h5``;
const Description = styled.h5`
  font-weight: normal;
`;

export default BookDetail;
