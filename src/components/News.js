import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles =[];
  constructor() {
    super();
    console.log("This is News Component COnstructor");
    this.state = {
      articles : this.articles,
      loading : false 
    }
  }
  async componentDidMount(){
    console.log("Componet MOunted")
    let url = "https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=938ce42feda24155b3ef57ceeba42290"
    let data = await fetch(url)
    let parsedData = await data.json()
    console.log(parsedData)
    this.setState({articles : parsedData.articles})
  }
  render() {
    console.log("render")
    return (
      <>
        <div className="container my-3 ">
          <h2>Top Headlines</h2>
          <div className="row">
            {this.state.articles.map((element)=>{
              return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title?element.title.slice(0,40):""} description={element.description?element.description.slice(0,66):""} imgUrl={element.urlToImage} newsUrl={element.url} />
              </div>
              
            })}


          </div>
        </div>
      </>
    );
  }
}

export default News;
