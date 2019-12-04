import React from 'react';
import './Team.css';



function WorkersTeam(props) {
  const numberWorkers = props.team;
  const items = numberWorkers.map((worker) =>
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
              <WorkersTeam team={this.props.workers}/>
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
