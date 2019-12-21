import React from 'react';
import './App.css';
import Header from './Header/Header';
import Slider from './Slider/Slider';
import Team from './Team/Team';
import Testimonials from './Testimonials/Testimonials';
import MapContainer from './MapContainer/MapContainer';
import Footer from './Footer/Footer';
import PopupForm from './PopupForm/PopupForm';
import Content from './Content/Content';
import {
  Route,
} from "react-router-dom";
import {Helmet} from "react-helmet";









function App(props) {

  

  return (
        <div className="wrap">
            <Route exact path="/">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Lily web agency</title>
                    <meta name="description" content="Creating web sites and web applications" />
                </Helmet>
                <Header isMainPage={true}/>
                <Slider/>
                <Team workers={props.dates.workers} />
                <Testimonials/>
                <MapContainer/>
                
            </Route>
            <Route path="/content/">
                  <Helmet>
                      <meta charSet="utf-8" />
                      <title>Lily web agency work</title>
                      <meta name="description" content="Creating web sites and web applications works" />
                  </Helmet>
                  <Header isMainPage={false} />
                  <Content works={props.dates.works}/>
            </Route>
            <PopupForm dispatch={props.dispatch}/>
            <Footer/>
        </div>  
  );
}

export default App;
