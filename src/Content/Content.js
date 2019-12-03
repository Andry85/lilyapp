import React from 'react';
import './Content.css';
import Work from './Work/Work';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {Helmet} from "react-helmet";


class Content extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    const content_1 = this.props.works[0].pictures.map((img) =>
      <li key={img.toString()}>
        <img src={img} />
      </li>
    );
    const content_2 = this.props.works[1].pictures.map((img) =>
      <li key={img.toString()}>
        <img src={img} />
      </li>
    );
    const content_3 = this.props.works[2].pictures.map((img) =>
      <li key={img.toString()}>
        <img src={img} />
      </li>
    );
    return (
      <Router>
        <div className="content">
          <Switch>
              <Route path="/content/ifs">  
                <Work 
                  title={this.props.works[0].title} 
                  desk={this.props.works[0].desk} 
                  urlLink={this.props.works[0].urlLink} 
                  urlText={this.props.works[0].urlText} 
                  images={content_1}/>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>IFS</title>
                    <meta name="description" content="IFS our project" />
                </Helmet>
              </Route>
              <Route path="/content/vitukraina">
                <Work 
                  title={this.props.works[1].title} 
                  desk={this.props.works[1].desk} 
                  urlLink={this.props.works[1].urlLink} 
                  urlText={this.props.works[1].urlText} 
                  images={content_2}/>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Vitukraina</title>
                    <meta name="description" content="Vitukraina our project" />
                </Helmet>
              </Route>
              <Route path="/content/mehinvest">
                <Work 
                  title={this.props.works[2].title} 
                  desk={this.props.works[2].desk} 
                  urlLink={this.props.works[2].urlLink} 
                  urlText={this.props.works[2].urlText} 
                  images={content_3}/>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Mehinvest</title>
                    <meta name="description" content="Mehinvest our project" />
                </Helmet>
              </Route>
          </Switch>
        </div>
      </Router>
      
        
    );
  }
}

export default Content;


