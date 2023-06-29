import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {imgUrl , title, description  , newsUrl , author , date ,source} = this.props;
    return (

      <div className="card my-3" >
          <span className="position-absolute top-0  translate-middle badge  bg-danger" style={{left:'50%' , zIndex:'2'}}>{source}</span>
        <img src={!imgUrl?"https://techcrunch.com/wp-content/uploads/2023/04/GettyImages-1341075718.jpg?resize=1200,750":imgUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={newsUrl} rel='noreferrer' target='_blank' className="btn btn-sm btn-primary">Read More</a>
          <p className="card-text"><small className="text-body-secondary">By <strong>{author?author:"Unknown"}</strong> on <strong>{new Date(date).toGMTString()}</strong> </small></p>
        </div>
      </div>       


    )
  }
}

export default NewsItem