// import React, { Component } from "react";
// import NewsCard from "./newsCard";
// import "./news.css";
// import Spinner from "./spinner";
// import PropTypes from "prop-types";
// import InfiniteScroll from 'react-infinite-scroll-component';

// export default class News extends Component {
//   static defaultProps = {
//     pageSize: 10,
//     query: "usa",
//     language: "en",
//   };
//   static propTypes = {
//     pageSize: PropTypes.number,
//     category: PropTypes.string,
   
//     language: PropTypes.string,
//   };
//   constructor() {
//     super();
//     this.state = {
//       articles: [],
//       loading: true,
//       page: 1,
//       totalResults: 0,
      
//     };
//   }

   
  
//   async componentDidMount() {
//     this.props.setProgress(10);
//     this.setState({
//       loading: true,
      
//     });
//     let url = `https://newsapi.org/v2/everything?q=${this.props.query}&sortBy=publishedAt&apiKey=${this.props.apiKey}`;
//     let data = await fetch(url);
//     let parsedData = await data.json();
//     this.setState({
//       loading: false,
//       articles: parsedData.articles,
//       totalResults: parsedData.totalResults,
      
//     });
//     this.props.setProgress(100);
//   }
//   fetchMoreData = async()=>{
//     this.setState({
//       page: this.state.page +1,
      
//     });
//     let url = `https://newsapi.org/v2/everything?q=${this.props.query}&sortBy=publishedAt&apiKey=${this.props.apiKey}`;
//     let data = await fetch(url);
//     let parsedData = await data.json();
//     this.setState({
//       loading: false,
//       articles: this.state.articles.concat(parsedData.articles),
//       totalResults: parsedData.totalResults,
      
//     });
   
//   }
 

//  render() {
//     return (
//       <>
//       <div className="text-left mx-2">
//         <small style= {{color: 'grey'}}>
//           Newsy &#62; Search
          
//         </small>
//       </div>
//       {this.state.loading && <Spinner/>}
  
          
//           <InfiniteScroll
//     dataLength={this.state.articles.length}
//     next={this.fetchMoreData}
   
//     inverse={false} 
//     hasMore={this.state.articles.length !== this.state.totalResults && this.props.pageSize *this.state.page + 1 <= 100}
//     loader={<Spinner/>}
    
//   >
//     <div className="row">
//             {
//               this.state.articles.map((element) => {
//                 return (
                  
//                   <NewsCard
//                     title={element.title}
//                     description={element.description}
//                     imgSrc={element.urlToImage}
//                     key={element.url+element.title+element.description+element.publishedAt+element.author+Math.random()}
//                     newsUrl={element.url}
//                     source={element.source.name}
//                     author={element.author}
//                     publishedDate={element.publishedAt}
//                   />
//                 );
//               })}
//                </div>
//               </InfiniteScroll>
         
        
//        </>
//     );
//   }
// }
