import React from 'react';
import { connect } from 'react-redux';
import './PopupForm.css';
import {addLetter} from '../actions/actions';
import axios from 'axios';


class PopupForm extends React.Component {
  constructor(props) {
    super(props);
    this.myRefForm = React.createRef();
    
    this.state = {
      name: 'Enter Your name',
      email: 'Enter Your email',
      message: 'Enter Your message'
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
    this.setState({message: event.target.value});
    
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    this.myRefForm.current.classList.remove("visible");

    axios({
      method: "POST", 
      url:"http://localhost:3002/send", 
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success'){
        alert("Message Sent."); 
        this.resetForm()
      }else if(response.data.status === 'fail'){
        alert("Message failed to send.")
      }
    })

  }

  hidepopup() {
    this.myRefForm.current.classList.remove("visible");
  }

  
  resetForm(){
    
    this.setState({name: '', email: '', message: ''})
 }

  render() {
    return (
      <div id="PopupForm" className="PopupForm" ref={this.myRefForm}>
        <div className="PopupForm__form">
          <span onClick={this.hidepopup} className="PopupForm__close"></span>
          <form className="PopupForm__formIneer" onSubmit={this.handleSubmit} method="POST">
            <div className="PopupForm__row">
              <div className="PopupForm__col">
                <label className="PopupForm__label">Your name:</label>
                <input className="PopupForm__field" type="text" onChange={this.handleName} value={this.state.name} />
              </div>
              <div className="PopupForm__col">
                <label className="PopupForm__label">Your email:</label>
                <input className="PopupForm__field" type="email" onChange={this.handleEmail} value={this.state.email} />
              </div>  
            </div>
            <div className="PopupForm__row">
              <div className="PopupForm__col--full">
                <label className="PopupForm__label">Your message:</label>
                <textarea className="PopupForm__field PopupForm__field--area" onChange={this.handleTextArea} value={this.state.message} />
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


