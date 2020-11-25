import React from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';

import {API_URL} from '../../../const';




class SliderItem extends React.Component {

  state = {
    images: []
  }

  componentDidMount() {

    const {featured_media} = this.props;

    axios.get(`${API_URL}/wp-json/wp/v2/media/${featured_media}`)
    .then(res => {
        console.log('Images', res);
        const images = res.data;
        this.setState({ images }); 
    });

  }

  render() {
    const {title, excerpt, id, works_images} = this.props;
    
    return (

        <div className="sliderList__item">
          <div className="sliderList__itemInner">    
              <div className="sliderList__col_1">
                <h3 className="sliderList__title" dangerouslySetInnerHTML={{__html: title.rendered}}></h3>
                <p className="sliderList__text" dangerouslySetInnerHTML={{__html: excerpt.rendered}}></p>
                <PrewWorkLink to={`/works/${id}`} label="detail..." />
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
                      <Link to={`/works/${id}`}>
                        <img src={this.state.images.source_url} alt="" />
                      </Link>
                    </figure>
                  </li>

                  <li className="portfolioList__item">
                    <figure>
                      <Link to={`/works/${id}`}>
                        <img src={works_images} alt="" />
                      </Link>
                    </figure>
                  </li>
     
                </ul>
              </div>
            </div>
          </div> 
    );
  }
}

export default SliderItem;


function PrewWorkLink({ label, to}) {

  return (
    <div className="sliderList__btnWrap">
      <Link to={to}>{label}</Link>
    </div>
  );
}

