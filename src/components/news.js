import React, { useState, useEffect } from "react";
import NewsCard from "./newsCard";
import "./news.css";
import Spinner from "./spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import NoResults from "./noresults";

export default function News(props) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState('true');
  const [page, setPage] = useState(1);
  const [totalResults, setTotal] = useState(0);
  const [initialResults, setInitial] = useState(1);

  const updateNews = async () => {
    props.setProgress(10);
    setLoading('true');
    let url = `https://newsapi.org/v2/top-headlines?category=${props.category}&language=${props.language}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=1`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setLoading('false');
    setArticles(parsedData.articles);
    setTotal(parsedData.totalResults);
    setInitial(parsedData.totalResults);
    props.setProgress(100);
  };
  const fetchMoreData = async () => {
    setPage(page + 1);
    let url = `https://newsapi.org/v2/top-headlines?category=${props.category}&language=${props.language}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${page}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setLoading('false');
    setArticles(articles.concat(parsedData.articles));
    setTotal(parsedData.totalResults);
  };
  useEffect(() => {
    updateNews();
  }, []);

  if (initialResults !== 0) {
    return (
      <>
        <div className="text-left mx-2">
          <small style={{ color: "grey" }}>
            Newsy &#62;{" "}
            {props.type === "home"
              ? "Home"
              : props.category.charAt(0).toUpperCase() +
                props.category.slice(1)}
          </small>
        </div>
        {loading == 'true' ? <Spinner /> : null}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          inverse={false}
          hasMore={
            articles.length !== totalResults && props.pageSize * page + 1 <= 100
          }
          loader={<Spinner />}
        >
          <div className="row">
            {articles.length !== 0 &&
              articles.map((element) => {
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
        </InfiniteScroll>
      </>
    );
  } else {
    return <NoResults />;
  }
}

News.defaultProps = {
  pageSize: 12,
  category: "general",
  language: "en",
};
News.propTypes = {
  pageSize: PropTypes.number,
  category: PropTypes.string,
  language: PropTypes.string,
};
