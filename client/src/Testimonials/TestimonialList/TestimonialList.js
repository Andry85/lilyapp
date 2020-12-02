import React from 'react';
import Slider from "react-slick";
import './TestimonialList.css';



class TestimonialList extends React.Component {
  

  render() {

    const {list} = this.props;

    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            dots: true,
            arrows: false,
          }
        },
      ]
    };
    return (

     

      <Slider {...settings}>
        
        { list.map(item => (  
              <div key={item.id} className="testimonialsList__slide">
                <div className="testimonialsList__inner">
                  <figure className="testimonialsList__avatar">
                    <img src={item.acf.authot_photo} alt="" />
                  </figure> 
                  <div className="testimonialsList__desc" dangerouslySetInnerHTML={{__html: item.content.rendered}}></div> 
                  <h3 className="testimonialsList__author" dangerouslySetInnerHTML={{__html: item.title.rendered}}></h3> 
                  <span className="testimonialsList__company" dangerouslySetInnerHTML={{__html: item.acf.company}}></span>
                </div>
              </div> 
        ))}


      </Slider>
    );
  }
}

export default TestimonialList;
