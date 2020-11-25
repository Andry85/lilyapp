import React from 'react';
import './Team.css';

import axios from 'axios';

import {API_URL} from '../const';



class Team extends React.Component {

  state = {
    people: [],
    loading: false,
    pages: []
  }

  componentDidMount() {

    axios.get(`${API_URL}/wp-json/wp/v2/team`)
      .then(res => {
        console.log('res',res);
        const team = res.data;
        this.setState({ 
          people: team,
          loading: true
        }); 
    });

    axios.get(`${API_URL}/wp-json/wp/v2/pages`)
      .then(res => {
        console.log('pages',res);
        const pages = res.data;
        this.setState({ 
          pages
        }); 
    });

  }

  render() {
    

    if (this.state.loading) {
        return (
          <section id="team" className="team">
            <div className="team_circle"></div>
            <div className="team__inner">
              <div className="WorkersTeamWrap">
                <ul> 
                  { this.state.people.map(person => (
                    <li key={person.id}>
                      <img src={person.acf.photo} alt="" />
                      <div className="WorkersTeamInner">
                        <h3 className="WorkersTeam__title" dangerouslySetInnerHTML={{__html: person.title.rendered}}></h3>
                        <p className="WorkersTeam__desc" dangerouslySetInnerHTML={{__html: person.content.rendered}}></p>
                      </div>
                    </li>
                  ))}
                </ul>
                    
              </div>
             
                  
              {this.state.pages.filter(page => page.id === 26).map(page => ( 
                  <div key={page.id} className="team__text">
                    <h2 className="team__title" dangerouslySetInnerHTML={{__html: page.title.rendered}}></h2>
                    <p className="team__desc" dangerouslySetInnerHTML={{__html: page.content.rendered}}></p>
                  </div>
              ))}

                  

            </div>
          </section>
        );

      } else {
          return (
            <div className="work-wrap">
              <h2 className="work__title">Loading...</h2>
            </div>
          )
        }

  }
}

export default Team;
