import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, img, newsurl, author, date, source} = this.props; 
    return (
      <section className="container newsitem__container">
        <div className="card">
            <div className="card__image">
                <img src={img} alt="" />
                <div className='card__source'>{source}</div>
            </div> 
            <div className="card__details">
                <h3 className="card__title">{title}...</h3>
                
                <p className="card__description">{description}...</p>
                <p className='card__timeline'>By {author} on {new Date(date).toGMTString()}</p>
                <a href={newsurl} target="_blank" rel="noreferrer"><button className="btn">Read more</button></a>
            </div>
        </div>
      </section>
    )
  }
}

export default NewsItem
