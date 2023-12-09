import React from 'react';
import { Link } from 'react-router-dom';

class LoginPageForm extends React.Component {
  constructor(props) {
    super(props);
    
    // inisialisasi state
    this.state = {
      email: '',
      password: '',
    }
    
    this.onEmailChangeEventHandler = this.onEmailChangeEventHandler.bind(this);
    this.onPasswordChangeEventHandler = this.onPasswordChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }
  
  onEmailChangeEventHandler(event) {
    this.setState(() => {
      return {
        email: event.target.value,
      }
    });
  }
  
  onPasswordChangeEventHandler(event) {
    this.setState(() => {
      return {
        password: event.target.value,
      }
    });
  }
  
  onSubmitEventHandler(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form className='contact-input' onSubmit={this.onSubmitEventHandler}>
        <h1>Sign In</h1>
            <h3>Email</h3>
            <input type="text" placeholder="Enter your email address" value={this.state.email} onChange={this.onEmailChangeEventHandler} />
            <h3>Password</h3>
            <input type="text" placeholder="Enter a strong password" value={this.state.password} onChange={this.onPasswordChangeEventHandler} />
            <div className='forget-password-signin'>
              <p>
                <a href="#">Forget Password?</a> 
              </p>
              <button type="submit">Sign In</button>
            </div>
        <div className='sign-up'>
          <p>Do not have an account? <b><Link to="/RegisterApp">Sign Up</Link></b></p>
        </div>
      </form>
    );
  }
}

export default LoginPageForm;
