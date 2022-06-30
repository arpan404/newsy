import React, { useState } from "react";
import NewsCard from "./newsCard";
import "./news.css";
import Spinner from "./spinner";
import { useEffect } from "react";
import { useParams } from "react-router";

export default function Search(props) {
  let params = useParams();
  let q = params.query;

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const loadNews = async () => {
    props.setProgress(10);
    setLoading(true);
    let url = `https://newsapi.org/v2/everything?q=${q}&sortBy=publishedAt&apiKey=${props.apiKey}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setLoading(false);
    setArticles(parsedData.articles);
    props.setProgress(100);
  };
  useEffect(() => {
    loadNews();
  }, [q]);

  return (
    <>
      <div className="text-left mx-2">
        <small style={{ color: "grey" }}>Newsy &#62; Search</small>
      </div>
      {loading === true && <Spinner />}

      <div className="row">
        {articles.map((element) => {
          return (
            <NewsCard
              title={element.title}
              description={element.description}
              imgSrc={element.urlToImage}
              key={
                element.url +
                element.title +
                element.description +
                element.publishedAt +
                element.author +
                Math.random()
              }
              newsUrl={element.url}
              source={element.source.name}
              author={element.author}
              publishedDate={element.publishedAt}
            />
          );
        })}
      </div>
    </>
  );
}
Search.defaultProps = {
  query: "usa",
};
