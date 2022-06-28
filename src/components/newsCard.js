import React, { Component } from "react";

import "./news.css";
export default class NewsCard extends Component {
  static defaultProps = {
    title: "News",
    description: "News' description",
    imgSrc:
      "https://media.istockphoto.com/vectors/breaking-news-vector-illustration-poster-banner-logo-badge-on-white-vector-id891605714?k=20&m=891605714&s=612x612&w=0&h=8cJMJnLE-Lam14zA4ozetp5uSyWsnPguil7PvwVgRRE=",
    newsUrl: "https://news.com",
    source: "News API",
    author: "News API",
    publishedDate: "Today",
  };
 
  
  render() {
    let { title, description, imgSrc, newsUrl, source, author, publishedDate } =
      this.props;
      
    return (
      <div className="card" style={{ width: "18rem", margin: "30px" }}>
        <img
          alt="news"
          src={
            !imgSrc 
              ? "https://media.istockphoto.com/vectors/breaking-news-vector-illustration-poster-banner-logo-badge-on-white-vector-id891605714?k=20&m=891605714&s=612x612&w=0&h=8cJMJnLE-Lam14zA4ozetp5uSyWsnPguil7PvwVgRRE="
              : imgSrc
          }
          className="card-img-top"
          style={{ maxHeight: "150px", width: '17.8rem', position: 'relative', left:'-0.75rem' }}
        />
      
        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger "
          style={{marginLeft: "-80px", zIndex: 1 }}
        >
         
          {!source ? "NewsAPI" : source}
        </span>
       
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text" style={{ color: "black" }}>
            <b style={{ color: "red", display: !author ? "none" : "" }}>
              Author:
            </b>{" "}
            {author}
          </p>
          <p
            className="card-text"
            style={{ display: !publishedDate ? "none" : "" }}
          >
            <small>Published At : {publishedDate}</small>
          </p>
          <a
            href={newsUrl}
            rel="noreferrer"
            target="_blank"
            className="btn btn-primary"
          >
            Read More
          </a>
        </div>
      </div>
    );
  }
}
