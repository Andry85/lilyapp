import React from 'react';
import Slider from "react-slick";
import axios from 'axios';
import SliderItem from './SliderItem/SliderItem';
import {API_URL} from '../../const';



class SliderList extends React.Component {

  _isMounted = false;

  state = {
    works: []
  }

  componentDidMount() {
    this._isMounted = true;
    
    axios.get(`${API_URL}/wp-json/wp/v2/works`)
      .then(res => {
        if (this._isMounted) {
          const works = res.data;
          this.setState({ works }); 
        }
    });

  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            dots: true,
            arrows: false,
          }
        },
      ]
    };
    return (
      <Slider {...settings}>
        { this.state.works.map(work => (
          <SliderItem
            key={work.id}
            title={work.title}
            excerpt = {work.excerpt}
            featured_media = {work.featured_media}
            id = {work.id}
            works_images = {work.acf.works_images.url}
          />
        ))}
      </Slider>
    );
  }
}

export default SliderList;

