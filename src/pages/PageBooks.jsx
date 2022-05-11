import { useEffect, useState } from "react";
import axios from "axios";

const booksUrl = "https://gutendex.com/books/?search=berlin";

export const PageBooks = () => {
  const [bookData, setBookData] = useState({ count: 0 });

  useEffect(() => {
    (async () => {
      setBookData((await axios.get(booksUrl)).data);
    })();
  });
  return (
    <>
      <h1>Books</h1>
      <h2>There are {bookData.count} books yet</h2>
      {bookData.results.map((book, index) => {})}
    </>
  );
};
