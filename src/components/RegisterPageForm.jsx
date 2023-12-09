/* eslint-disable react/prop-types */
import React from 'react';

class RegisterPageForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      agreeTerms: false, // Added state for terms and conditions checkbox
    };

    this.onFirstNameChangeEventHandler = this.onFirstNameChangeEventHandler.bind(this);
    this.onLastNameChangeEventHandler = this.onLastNameChangeEventHandler.bind(this);
    this.onEmailChangeEventHandler = this.onEmailChangeEventHandler.bind(this);
    this.onPasswordChangeEventHandler = this.onPasswordChangeEventHandler.bind(this);
    this.onAgreeTermsChangeEventHandler = this.onAgreeTermsChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onFirstNameChangeEventHandler(event) {
    this.setState(() => {
      return {
        firstName: event.target.value,
      };
    });
  }

  onLastNameChangeEventHandler(event) {
    this.setState(() => {
      return {
        lastName: event.target.value,
      };
    });
  }

  onEmailChangeEventHandler(event) {
    this.setState(() => {
      return {
        email: event.target.value,
      };
    });
  }

  onPasswordChangeEventHandler(event) {
    this.setState(() => {
      return {
        password: event.target.value,
      };
    });
  }

  onAgreeTermsChangeEventHandler(event) {
    this.setState(() => {
      return {
        agreeTerms: event.target.checked,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    // Add a check for terms and conditions before calling addContact
    if (this.state.agreeTerms) {
      this.props.addContact(this.state);
    } else {
      alert('Please agree to the terms and conditions.');
    }
  }

  render() {
    return (
      <form className='contact-input' onSubmit={this.onSubmitEventHandler}>
        <h1>Sign Up</h1>
        <div className="name-inputs">
          <div>
            <h3>First Name</h3>
            <input type="text" placeholder="Enter your first name" value={this.state.firstName} onChange={this.onFirstNameChangeEventHandler} />
          </div>
          <div>
            <h3>Last Name</h3>
            <input type="text" placeholder="Enter your last name" value={this.state.lastName} onChange={this.onLastNameChangeEventHandler} />
          </div>
        </div>
        <h3>Email</h3>
        <input type="text" placeholder="Enter your email address" value={this.state.email} onChange={this.onEmailChangeEventHandler} />
        <h3>Password</h3>
        <input type="password" placeholder="Enter a strong password" value={this.state.password} onChange={this.onPasswordChangeEventHandler} />
        <div className="terms-checkbox">
          <input type="checkbox" id="agreeTerms" checked={this.state.agreeTerms} onChange={this.onAgreeTermsChangeEventHandler} />
          <label htmlFor="agreeTerms">I agree with <a href="/#">Mediqueue Terms and Conditions</a></label>
        </div>
        <button type="submit">Sign Up</button>
      </form>
    );
  }
}

export default RegisterPageForm;
