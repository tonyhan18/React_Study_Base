import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopNav from "./components/organisms/TopNav";
import Book from "./components/pages/Book";
import Main from "./components/pages/Main";
import Movie from "./components/pages/Movie";

const Router = () => {
  return (
    <BrowserRouter>
      <TopNav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/book" element={<Book />} />
        <Route path="/movie" element={<Movie />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
