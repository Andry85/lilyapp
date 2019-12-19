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
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {Helmet} from "react-helmet";









function App(props) {

  

  return (
    <Router>
      <Switch>
          <Route exact path="/">
            <div className="wrap">
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
              <Footer/>
              <PopupForm dispatch={props.dispatch}/>
            </div>
          </Route>
          <Route path="/content/">
            <div className="wrap">
                <Header isMainPage={false} />
                <Content works={props.dates.works}/>
                <Footer/>
                <PopupForm dispatch={props.dispatch}/>
            </div>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
