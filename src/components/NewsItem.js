import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {imgUrl , title, description  , newsUrl} = this.props;
    return (
        <div className="card my-3" style={{width: "18rem"}}>
        <img src={imgUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href="/newsitem/" className="btn btn-sm btn-primary">Read More</a>
        </div>
      </div>
    )
  }
}

export default NewsItem