import "./App.css";

import { useState, useEffect } from "react";

import Product from "./Product";

export default function App() {
  const [page, setPage] = useState(0);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://kea-alt-del.dk/t7/api/products?start=${page * 10}`)
      .then((res) => res.json())
      .then((data) => {
        setArticles((prev) => prev.concat(data));
        //or setArticles((prev)=> [...prev, ...data]);
        setLoading(false);
      });
  }, [page]);

  return (
    <>
      <section>
        <h1>PRODUCT LIST</h1>
        <div id="article_wrapper">
          {articles.map((art) => (
            <Product art={art} />
          ))}
        </div>

        {loading && <p>Loading more data</p>}
        <button id="load" onClick={() => setPage((prev) => prev + 1)}>
          LOAD MORE
        </button>
      </section>
    </>
  );
}
