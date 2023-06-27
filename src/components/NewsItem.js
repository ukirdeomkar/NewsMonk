import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {imgUrl , title, description  , newsUrl} = this.props;
    return (
      <div className="container">
      <div className="card my-3" style={{width: "18rem"}}>
        <img src={!imgUrl?"https://techcrunch.com/wp-content/uploads/2023/04/GettyImages-1341075718.jpg?resize=1200,750":imgUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={newsUrl} rel='noreferrer' target='_blank' className="btn btn-sm btn-primary">Read More</a>
        </div>
      </div>       
      </div>

    )
  }
}

export default NewsItem