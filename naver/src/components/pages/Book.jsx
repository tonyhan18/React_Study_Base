import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getBookList } from "../../apis/book";
import { countryList } from "../../datas";
import { BtnSubmit, Form, InputText } from "../atoms";
import BookList from "../organisms/BookList";
import Pagination from "../organisms/Pagination";
import qs from "qs";

const Book = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const [text, settext] = useState("");
  const [bookList, setBookList] = useState([]);
  const [country, setCountry] = useState(countryList[0].code);
  const [query, setQuery] = useState("");
  const [total, setTotle] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const { query, page } = qs.parse(search.slice(1));
    if (query) {
      setQuery(query);
      settext(query);
    }
    if (page) {
      setPage(+page); //이렇게하면 숫자로 바뀜
    }
  }, [search]);

  useEffect(() => {
    searchBook();
  }, [country, page, query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPage(1);
    setQuery(text);
  };

  const searchBook = async () => {
    if (!query) return;
    const start = page * 10 - 9;
    const params = { query, start };
    if (country !== "ALL") {
      params.country = country;
    }
    const { items, total } = await getBookList(params);
    setBookList(items);
    setTotle(total);
    const search = qs.stringify({ query, page });
    navigate({ search });
  };

  return (
    <div>
      <h1>Book</h1>
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
      <BookList data={bookList} />
    </div>
  );
};

export default Book;
