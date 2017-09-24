import React from 'react'
import './News.css'

export const News = () => (
  <div id="myCarousel" className="carousel slide hidden-xs" data-ride="carousel">

    <ol className="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" className="active" data-interval="5000"></li>
      <li data-target="#myCarousel" data-slide-to="1" data-interval="5000"></li>
      <li data-target="#myCarousel" data-slide-to="2" data-interval="5000"></li>
    </ol>

    <div className="carousel-inner" role="listbox">
      <div className="item active">
        <img src={require('./news/news1.png')}/>
      </div>

      <div className="item">
        <img src={require('./news/news2.png')}/>
      </div>

      <div className="item">
        <img src={require('./news/news3.png')}/>
      </div>
    </div>

  </div>
)

export default News