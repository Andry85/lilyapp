import React from 'react';
import axios from 'axios';

import {API_URL} from '../../const';




class WorkImage extends React.Component {

  state = {
    images: []
  }

  componentDidMount() {

    const {featured_media} = this.props;

    axios.get(`${API_URL}/wp-json/wp/v2/media/${featured_media}`)
    .then(res => {
        const images = res.data;
        this.setState({ images }); 
    });

  }

  render() {
    
    return (    
        <ul className="workList">
            <li>
                <figure>
                    <img src={this.state.images.source_url} alt="" />
                </figure>
            </li>    
        </ul>
        
    );
  }
}

export default WorkImage;
