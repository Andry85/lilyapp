import React, { Fragment } from 'react';
import Slider from "react-slick";
import './TestimonialList.css';


import client_1 from './img/rufer.png';

const testimonials = [
  {
      id: 1, 
      name: 'Sergey Ruhrer', 
      position: 'CEO "Antonina"+',
      text: 'Successfully closed with Prostosite project, everything was done on time, in addition some small wishes were made on my part!',
      img: client_1
  },
  {
    id: 2, 
    name: 'Sergey Ruhrer', 
    position: 'CEO "Antonina"+',
    text: 'Successfully closed with Prostosite project, everything was done on time, in addition some small wishes were made on my part!',
    img: client_1
  },
  {
      id: 3, 
      name: 'Sergey Ruhrer', 
      position: 'CEO "Antonina"+',
      text: 'Successfully closed with Prostosite project, everything was done on time, in addition some small wishes were made on my part!',
      img: client_1
  }
];

function TestimonialListInner(props) {
  const testimonials = props.clientssay;
  const listTestimonials = testimonials.map((testimonial) =>
  <div key={testimonial.toString()} className="testimonialsList__slide">
    <div className="testimonialsList__inner">
      <figure className="testimonialsList__avatar">
        <img src={testimonial.img} />
      </figure> 
      <div className="testimonialsList__desc">
        {testimonial.text}
      </div> 
      <h3 className="testimonialsList__author">{testimonial.position}</h3> 
      <span className="testimonialsList__position">{testimonial.name}</span>
    </div>
  </div>
  );
  return (
      <Fragment>
        {listTestimonials}
      </Fragment>
  );
}



class TestimonialList extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
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
        
        {/* <TestimonialListInner clientssay={testimonials} /> */}

      </Slider>
    );
  }
}

export default TestimonialList;
