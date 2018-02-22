import React, { Component } from 'react';
import './App.css';
import AccountForm from './components/AccountForm'
import PasswordForm from './components/PasswordForm'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      accountErrorList: [],
      passwordErrorList: []
    }
  }
  
  validate(val, targetForm) {
    let errorList = []
    if (val === '') {
      errorList.push('required')
    }
    if (val.length > 8 && val.length > 0) {
      errorList.push('length')
    }
    if (val.length < 4 && val.length > 0) {
      errorList.push('length')
    }
    
    
    if (targetForm === 'account') {
      this.setState({accountErrorList: errorList})
    }
    if (targetForm === 'password') {
      this.setState({passwordErrorList: errorList})
    }
    
  }
  
  render() {
    const {accountErrorList, passwordErrorList} = this.state
    return (
      <div className="container">
        <AccountForm 
          validate={val => this.validate(val, 'account')}
          errorList={accountErrorList}
        />
        <PasswordForm 
          validate={val => this.validate(val, 'password')}
          errorList={passwordErrorList}
        />
      </div>
    );
  }
}

export default App;
