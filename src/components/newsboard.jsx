import React, { useEffect, useState } from "react";
import NewsItem from "./newsitem";

const Newsboard = (props) => {
  const API_KEY = "be9780724c6f490aa81e93236f6d0a71";
  const [articles, setarticles] = useState([]);
  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=be9780724c6f490aa81e93236f6d0a71`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setarticles(data.articles));
  }, [props.category]); /////when my category state get updated (business,sport,health) our newsboard get re-render.

  console.log(articles);

  return (
    <>
      {articles.map((news) => {
        return (
          <NewsItem
            title={news.title}
            descr={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        );
      })}
    </>
  );
};

export default Newsboard;
