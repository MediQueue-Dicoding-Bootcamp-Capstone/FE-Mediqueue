import React from 'react';
import RegisterPageForm from './RegisterPageForm';
import LoginPageLogo from './LoginPageLogo';
 
class RegisterApp extends React.Component {
 constructor(props) {
   super(props);
 }
 
  render() {
    return (
      <div className="container-fluid register-app">
        <div className="row full-height">
          <div className="col-12 col-md-6 login-page__logo">
            <LoginPageLogo />
          </div>
          <div className="col-12 col-md-6 login-page__form">
            <RegisterPageForm />
          </div>
        </div>
        
      </div>
    );
  }
}
 
export default RegisterApp;
