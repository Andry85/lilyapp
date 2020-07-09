import React from 'react';
import { connect } from 'react-redux';
import './PopupForm.css';
import {addLetter} from '../actions/actions';


class PopupForm extends React.Component {
  constructor(props) {
    super(props);
    this.myRefForm = React.createRef();
    
    this.state = {
      value: 'Enter Your message',
      name: 'Enter Your name',
      email: 'Enter Your email',
    };

    this.handleTextArea = this.handleTextArea.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.hidepopup = this.hidepopup.bind(this);



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
    event.preventDefault();
    this.props.addMessage(this.state.value, this.state.name, this.state.email);
    this.myRefForm.current.classList.remove("visible");
  }

  hidepopup() {
    this.myRefForm.current.classList.remove("visible");
  }

  componentDidMount() {

  }

  render() {
    return (
      <div id="PopupForm" className="PopupForm" ref={this.myRefForm}>
        <div className="PopupForm__form">
          <span onClick={this.hidepopup} className="PopupForm__close"></span>
          <form className="PopupForm__formIneer" onSubmit={this.handleSubmit}>
            <div className="PopupForm__row">
              <div className="PopupForm__col">
                <label className="PopupForm__label">Your name:</label>
                <input className="PopupForm__field" type="text" onChange={this.handleName} placeholder={this.state.name} />
              </div>
              <div className="PopupForm__col">
                <label className="PopupForm__label">Your email:</label>
                <input className="PopupForm__field" type="email" onChange={this.handleEmail} placeholder={this.state.email} />
              </div>  
            </div>
            <div className="PopupForm__row">
              <div className="PopupForm__col--full">
                <label className="PopupForm__label">Your message:</label>
                <textarea className="PopupForm__field PopupForm__field--area" onChange={this.handleTextArea} placeholder={this.state.value}/>
              </div>
            </div>
            <button className="PopupForm__btn">SEND</button>
            
          </form>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
    items: state.addingLetterReducer
});

const mapDispatchToProps = (dispatch) => ({
  addMessage: (text,name,email) => dispatch(addLetter(text,name,email))
});

export default connect(mapStateToProps, mapDispatchToProps)(PopupForm)


