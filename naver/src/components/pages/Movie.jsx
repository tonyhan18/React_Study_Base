import { useState } from "react";
import styled from "styled-components";
import getMovieList from "../../apis/movie";
import { Title } from "../atoms/index";
import MovieList from "../organisms/MovieList";

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [text, setText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const params = { query: text };
    const { items } = await getMovieList(params);
    setMovies(items);
  };
  return (
    <div>
      <Title>Movie</Title>
      <Form onSubmit={handleSubmit}>
        <InputText
          name="input"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <BtnSubmit>검색</BtnSubmit>
      </Form>
      <MovieList movies={movies} />
    </div>
  );
};

const Form = styled.form`
  //위치
  margin-top: 5%;
  display: flex;
  //크기
  //꾸미기
  border: 1px solid #22b8cf;
  border-radius: 5px;
`;
const InputText = styled.input`
  //위치
  padding: 5px;
  background-color: white;
  background: none;
  outline: none;
  border: none;
  font-size: 1.1rem;
  line-height: 1.5;
  flex: 1;
`;
const BtnSubmit = styled.button`
  background: none;
  outline: none;
  border: none;
  background-color: #22bfff;
  color: white;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.1s background ease-in;
  &:hover {
    background-color: #adb5bd;
  }
`;

export default Movie;
