import React, { Component } from 'react'
import loading from './loading.gif'

export class Loader extends Component {
  render() {
    return (
      <div>
        <div className="text-center">
        <img src={loading} alt="loading"/>
      </div>
      </div>
    )
  }
}

export default Loader
