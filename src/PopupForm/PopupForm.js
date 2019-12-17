import React from 'react';
import './PopupForm.css';



class PopupForm extends React.Component {
  constructor(props) {
    super(props);
    this.hidepopup = this.hidepopup.bind(this);
    this.state = {
      value: 'Send us a letter.',
      name: 'Enter Your name',
      email: 'Enter Your email',
      countletter: 0
    };

    this.handleTextArea = this.handleTextArea.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.Addletter = this.Addletter.bind(this);

  }

  handleName(event) {
    this.setState({name: event.target.value});
  }
  handleEmail(event) {
    this.setState({email: event.target.value});
  }
  handleTextArea(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    console.log('The letter was: ' + this.state.value);
    console.log('Your name is: ' + this.state.name);
    console.log('Your email is: ' + this.state.email);
    event.preventDefault();
  }

  hidepopup() {
    document.getElementById('PopupForm').classList.remove("visible");
  }

  Addletter = () => {
    debugger;
    this.setState({countletter: this.state.countletter + 1});
    this.props.addLetter(this.state.countletter, this.state.name, this.state.email, this.state.value);
    document.getElementById('PopupForm').classList.remove("visible");
  }
  


  render() {
    return (
      <div id="PopupForm" className="PopupForm">
        <div className="PopupForm__form">
          <span onClick={this.hidepopup} className="PopupForm__close"></span>
          <form className="PopupForm__formIneer" onSubmit={this.handleSubmit}>
            <div className="PopupForm__row">
              <div className="PopupForm__col">
                <label className="PopupForm__label">Your name:</label>
                <input className="PopupForm__field" type="text" onChange={this.handleName} />
              </div>
              <div className="PopupForm__col">
                <label className="PopupForm__label">Your email:</label>
                <input className="PopupForm__field" type="email" onChange={this.handleEmail} />
              </div>  
            </div>
            <div className="PopupForm__row">
              <div className="PopupForm__col--full">
                <label className="PopupForm__label">Your message:</label>
                <textarea className="PopupForm__field PopupForm__field--area" onChange={this.handleTextArea}></textarea>
              </div>
            </div>
            <button onClick={this.Addletter} className="PopupForm__btn">SEND</button>
          </form>
        </div>
      </div>
    );
  }
}

export default PopupForm;


