import React from 'react';
import LoginPageForm from './LoginPageForm';
import LoginPageLogo from './LoginPageLogo';
 
class LoginApp extends React.Component {
 constructor(props) {
   super(props);
 }
 
  render() {
    return (
      <div className="container-fluid login-app">
        <div className="row">
          <div className="col-12 col-md-6 login-page__logo">
            <LoginPageLogo />
          </div>
          <div className="col-12 col-md-6 login-page__form">
            <LoginPageForm />
          </div>
        </div>
        
      </div>
    );
  }
}
 
export default LoginApp;
