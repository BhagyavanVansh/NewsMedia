import React, { Component } from 'react'
import loading from './loading2.gif'
import './spiner.css'

export class Spiner extends Component {
  render() {
    return (
      <section className='container spiner__container'>
        <img src={loading} alt="" />
      </section>
    )
  }
}

export default Spiner
