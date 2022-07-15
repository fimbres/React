import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import jwtDecode from "jwt-decode";
import "react-toastify/dist/ReactToastify.css";

import './App.css';
import Router from './components/router';


class App extends Component {
  state = {
    user: null
  }

  componentDidMount() {
    try{
      const token = localStorage.getItem('authToken');
      const user = jwtDecode(token);
      this.setState({ user });
    }
    catch(e){}
  }

  render() { 
    return (
      <div className="App">
        <ToastContainer />
        <Router user={this.state.user}/>
      </div>
    );
  }
}

export default App;
