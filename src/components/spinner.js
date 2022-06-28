import React, { Component } from 'react'
import loading from './assets/loading.gif'
import "./news.css"
export default class Spinner extends Component {
  render() {
    return (
      <div className = "loadingImgContainer">
        <img src={loading} alt="loading" className = "loadingImg"/>
      </div>
    )
  }
}
