import React, { Component } from 'react'
import loading from "./loading.gif"
export class Spinner extends Component {
  render() {
    return (
      <div>
        <div className="container text-center"><img src={loading} alt="..." style={{height:"20px", width:"20px" }}/></div>
      </div>
    )
  }
}

export default Spinner