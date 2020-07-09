import React from 'react';
import './Team.css';

import worker_1 from './../Team/img/andriiShapoval.jpg';
import worker_2 from './../Team/img/olga.png';
import worker_3 from './../Team/img/maryna.png';
import worker_4 from './../Team/img/gena.png';


const workers = [
  {
    id: 1, 
    name: 'Andii Shapoval', 
    position: 'React JS Developer and UI designer',
    img: worker_1

  },
  {
    id: 2, 
    name: 'Olga Petrova', 
    position: 'Account manager',
    img: worker_2

  },
  {
    id: 3, 
    name: 'Maryna Petrova', 
    position: 'Sales manager',
    img: worker_3
  },
  {
    id: 4, 
    name: 'Kovalenko Gennady', 
    position: 'CEO',
    img: worker_4
  }
];


function WorkersTeam(props) {
  const items = workers.map((worker) =>
    <li key={worker.id}>
      <img src={worker.img} />
      <div className="WorkersTeamInner">
        <h3 className="WorkersTeam__title">{worker.name}</h3>
        <p className="WorkersTeam__desc">{worker.position}</p>
      </div>
    </li>
  );
  return (
    <ul>{items}</ul>
  );

}

class Team extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <section id="team" className="team">
        <div className="team_circle"></div>
        <div className="team__inner">
          <div className="WorkersTeamWrap">
              
            <WorkersTeam/>
                 
          </div>
          <div className="team__text">
            <h2 className="team__title">Team</h2>
            <p className="team__desc">Our specialists have more than 10 years of experience in web development. Among our employees are designers, programmers, testers and managers.</p>
            <p className="team__desc">We expect our customers to recommend us to their friends just like this type of advertising is the best.</p>
          </div>
        </div>
      </section>
    );
  }
}

export default Team;
