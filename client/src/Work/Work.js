import React, { useState, useEffect } from 'react';
import './Work.css';
import WorkImage from './WorkImage/WorkImage';

import {useParams} from "react-router-dom";

import axios from 'axios';

import {API_URL} from '../const';



export default function Wor() {

  let {id} = useParams();

  const [work, setWork] = useState({});
  const [loading, setLoading] = useState(false);

  

  useEffect(() => {

    
    axios.get(`${API_URL}/wp-json/wp/v2/works/${id}`)
      .then(res => {
        const work = res.data;
        setWork(work);  
        setLoading(true); 
    });

  }, [id]);

  if (loading) {
    return (
    
      <div className="work-wrap">
        <h2 className="work__title" dangerouslySetInnerHTML={{__html: work.title.rendered}}></h2>
        <p className="work__desk" dangerouslySetInnerHTML={{__html: work.content.rendered}}></p>
        <WorkImage 
            featured_media = {work.featured_media} 
        />
        <div className="work__visit">
          Visit: <a className="work__url" href={work.acf.link} target="_blank" rel="noopener noreferrer">{work.acf.link}</a>
        </div>
        
      </div>
    );
  } else {
    return (
      <div className="work-wrap">
        <h2 className="work__title">Loading...</h2>
      </div>
    )
  }

  
}



