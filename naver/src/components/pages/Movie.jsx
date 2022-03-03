import { useEffect, useState } from "react";
import { getMovieList } from "../../apis/movie";
import { countryList } from "../../datas";
import { BtnSubmit, Form, InputText } from "../atoms";
import { MovieList } from "../organisms";
import Pagination from "../organisms/Pagination";

const Movie = () => {
  const [text, settext] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [country, setCountry] = useState(countryList[0].code);
  const [query, setQuery] = useState("");
  const [total, setTotle] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    searchMovie();
  }, [country, page, query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPage(1);
    setQuery(text);
  };

  const searchMovie = async () => {
    if (!query) return;
    const start = page * 10 - 9;
    const params = { query, start };
    if (country !== "ALL") {
      params.country = country;
    }
    const { items, total } = await getMovieList(params);
    //console.log(items);
    setMovieList(items);
    setTotle(total);
  };

  return (
    <div>
      <h1>Movie</h1>
      <Form onSubmit={handleSubmit}>
        <select onChange={(e) => setCountry(e.target.value)}>
          {countryList.map(({ code, name }) => (
            <option key={code} value={code}>
              {name}
            </option>
          ))}
        </select>
        <InputText
          name="text"
          value={text}
          onChange={(e) => settext(e.target.value)}
        />
        <BtnSubmit>검색</BtnSubmit>
      </Form>
      <Pagination
        onPageChange={(page) => setPage(page)}
        total={total}
        nowPage={page}
      />
      <MovieList data={movieList} />
    </div>
  );
};

export default Movie;
