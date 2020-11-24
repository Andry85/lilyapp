import React from 'react';
import './Testimonials.css';
import TestimonialList from './TestimonialList/TestimonialList';

import axios from 'axios';


class Testimonials extends React.Component {

  state = {
    testimonials: [],
    loading: false,
  }

  componentDidMount() {

    axios.get('/wp-json/wp/v2/testimonials')
      .then(res => {
        console.log('testimonials', res);
        const testimonials = res.data;
        this.setState({ 
          testimonials,
          loading: true
        }); 
    });


  }

  render() {
    return (
        <div id="testimonials" className="testimonialsOuter">
          <div className="testimonialsWrap">
            <h2 className="testimonialsWrap__title">Testimonials</h2>
            <div className="testimonialsWrap__inside">
              <TestimonialList
                list = {this.state.testimonials}
              />
            </div>
          </div> 
        </div> 
    );
  }
}

export default Testimonials;
