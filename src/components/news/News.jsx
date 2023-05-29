import React, { Component } from 'react'
import NewsItem from './NewsItem'
import './news.css'
import Spiner from '../spiner/Spiner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {
    static defaultProps = {
        country: 'in',
        category : "general"
      }
    
      static propTypes ={
        country : PropTypes.string,
        category: PropTypes.string
    }


     constructor(props){
        super(props);
        this.state = {
            articles : [],
            loading : true,
            totalResults: 0,
            page: 1,
        }

        document.title = `NewsMedia - ${this.capitilize(this.props.category)}`
     }

     updateNews = async() => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=85ad5d8264af409888a637ae62b26f9f&page=${this.state.page}&pagesize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({
            articles : this.state.articles.concat(parseData.articles),
            loading : false,
            totalResults: parseData.totalResults,
        })
     }
      componentDidMount = async() => {
        this.updateNews();
     }

     
    capitilize = (str) =>{
        return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
    }

    fetchMoreData = async() => {
        this.setState({page : this.state.page + 1});
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=85ad5d8264af409888a637ae62b26f9f&page=${this.state.page}&pagesize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({
            articles : this.state.articles.concat(parseData.articles),
            totalResults: parseData.totalResults,
        })
        console.log(this.state.articles.length)
    }

  render() {
    return (
      <>
      <section className="container news__container">
        <h1 className='news__title'>NewsMedia - Top {this.capitilize(this.props.category)} Headlines...!</h1>
        {/* {this.state.loading && <Spiner/>} */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length < this.state.totalResults}
          loader={ <Spiner/>}
        >
        <div className="news__newsitem grid">
          {
            this.state.articles.map((element, index) => {
                return (
                    <div className="item" key={index}>
                        <NewsItem title = {element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 60) : ""} img={element.urlToImage ? element.urlToImage : 'https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'} newsurl={element.url} author={element.author ? element.author : "unknown"} date={element.publishedAt} source={element.source.name}/>
                    </div>
                )
            })
          }
        </div>
        </InfiniteScroll>
      </section>
     
      </>
    )
  }
}

export default News
