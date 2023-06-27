import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    console.log("This is News Component COnstructor");
    this.state = {
      articles: [],
      loading: false,
      page: 1,

    };
  }
  async componentDidMount() {
    console.log("Componet MOunted");
    this.setState({pageSize : 10})
    let url =
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=938ce42feda24155b3ef57ceeba42290&page=1&pageSize=9`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles  , totalResults : parsedData.totalResults });


  }
  handleNextClick = async () => {
    console.log("next")

    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=938ce42feda24155b3ef57ceeba42290&page=${this.state.page + 1}&pageSize=9`
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles : parsedData.articles})
    this.setState({page  :this.state.page + 1})
    
  };
  handlePrevClick = async () => {
    console.log("prev");
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=938ce42feda24155b3ef57ceeba42290&page=${this.state.page - 1}&pageSize=9`
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles : parsedData.articles})
    this.setState({page  :this.state.page - 1})
  };
  render() {
    console.log("render");
    return (
      <>
        <div className="container my-3 ">
          <h2>Top Headlines</h2>
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 40) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 66)
                        : ""
                    }
                    imgUrl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
          </div>
          <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} className="btn btn-primary" onClick={this.handlePrevClick}>
              &larr;Previous
            </button>
            <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/10)} className="btn btn-primary" onClick={this.handleNextClick}>
              Next &rarr;
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default News;
