import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";

import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  // eslint-disable-next-line
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  // constructor(props) {
  //   super(props)
  //   console.log("This is News Component COnstructor");
  //   state = {
  //     articles: [],
  //     loading: false,
  //     page: 1,
  //     totalResults: 0,
  //   };

  //   document.title = `${capitalize(props.category)} -  NewsMonk`;
  // }
  const updateNews = async () => {
    props.setProgress(10);
    // setState({ loading: true });
    setLoading(true);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    props.setProgress(40);
    let parsedData = await data.json();
    props.setProgress(70);
    console.log(parsedData);
    setArticles(parsedData.articles);
    setLoading(false);
    setTotalResults(parsedData.totalResults);
    // setState({
    //   articles: parsedData.articles,
    //   totalResults: parsedData.totalResults,
    //   loading: false,
    // });
    props.setProgress(100);
  };
  const fetchMoreData = async () => {
    // setState({ page: state.page + 1 });
    console.log("Page No :" ,page);
    setPage(page + 1);
    // setState({ loading: true });
    setLoading(true);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    console.log(parsedData);

    console.log("Article length :" , Math.ceil(articles.length /props.pageSize));
    console.log("Total Results :" , Math.ceil(totalResults/props.pageSize));
    // setState({
    //   articles: articles.concat(parsedData.articles),
    //   totalResults: parsedData.totalResults,
    //   loading: false,
    // });
  };

  // async componentDidMount() {
  //   console.log("Componet MOunted");
  //   updateNews();
  // }

  useEffect(() => {
    document.title = `${capitalize(props.category)} -  NewsMonk`;
    updateNews();
    // eslint-disable-next-line
  }, []);

  // const handleNextClick = async () => {
  //   console.log("next");
  //   // setState({ page: page + 1 });
  //   setPage(page + 1);
  //   updateNews();
  // };
  // const handlePrevClick = async () => {
  //   console.log("prev");
  //   // setState({ page: page - 1 });
  //   setPage(page - 1);
  //   updateNews();
  // };

  const capitalize = (s) => {
    return s[0].toUpperCase() + s.slice(1);
  };

  console.log("render");
  return (
    <>
      <h1 className='text-center my-3 mb-3' style={{ padding: "50px" }}>
        Top {capitalize(props.category)} Headlines
      </h1>
      {/* {loading && <Spinner />} */}
      <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={Math.ceil(articles.length /props.pageSize)!== Math.ceil(totalResults/props.pageSize) }
          loader={<Spinner />}
          
        >

      <div className='container'>
        <div className='row'>
          {/* {articles.map((element , index) => { */}
          {
            articles.map((element, index) => {
              return (
                <div className='col-md-4' key={index}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imgUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
        </div>
      </div>
      </InfiniteScroll>

      {/* <div className='container d-flex justify-content-between'>
        <button
          disabled={page <= 1}
          className='btn btn-primary'
          onClick={handlePrevClick}>
          &larr;Previous
        </button>
        <button
          disabled={page + 1 > Math.ceil(totalResults / props.pageSize)}
          className='btn btn-primary'
          onClick={handleNextClick}>
          Next &rarr;
        </button>
      </div> */}
    </>
  );
};

News.defaultProps = {
  pageSize: 9,
  country: "in",
  category: "general",
};
News.propTypes = {
  pageSize: PropTypes.number,
  country: PropTypes.string,
  category: PropTypes.string,
};
export default News;
