import React from 'react';
import Slider from "react-slick";
import {Link} from "react-router-dom";

import axios from 'axios';


import ifs_01 from './Img/ifs_01.jpg';
import ifs_02 from './Img/ifs_02.jpg';

import vuk_01 from './Img/vuk_01.jpg';
import vuk_02 from './Img/vuk_02.jpg';

import mi_01 from './Img/mi_01.jpg';
import mi_02 from './Img/mi_02.jpg';


class SliderList extends React.Component {

  state = {
    works: []
  }

  componentDidMount() {
    
    axios.get('/wp-json/wp/v2/works')
      .then(res => {
        const works = res.data;
        this.setState({ works }); 
    });

  }

  render() {
    console.log(this.state);
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
              <div key={work.id} className="sliderList__item">
                <div className="sliderList__itemInner">    
                    <div className="sliderList__col_1">
                      <h3 className="sliderList__title" dangerouslySetInnerHTML={{__html: work.title.rendered}}></h3>
                      <p className="sliderList__text" dangerouslySetInnerHTML={{__html: work.excerpt.rendered}}></p>
                      <PrewWorkLink to={work.id} label="detail..." />
                      <div className="sliderList__lines">
                        <span className="first-el"></span>
                        <span className="second-el"></span>
                        <span></span>
                      </div>
                    </div>
                    <div className="sliderList__col_2">
                      <ul className="portfolioList">
                        <li className="portfolioList__item">
                          <figure>
                            <img src={ifs_01} alt="" />
                          </figure>
                        </li>
                        <li className="portfolioList__item">
                          <figure>
                            <img src={ifs_02} alt="" />
                          </figure>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div> 
          ))}
        
        

         

        
      </Slider>
    );
  }
}

export default SliderList;


function PrewWorkLink({ label, to}) {

  return (
    <div className="sliderList__btnWrap">
      <Link to={to}>{label}</Link>
    </div>
  );
}

