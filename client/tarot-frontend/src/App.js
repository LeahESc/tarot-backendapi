import './App.css';
import React, { Component } from 'react'
import axios from 'axios'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'


class App extends Component() {
  state = {
      isLoggedIn: false, 
      user: {}
    }
  

  componentDidMount() {
    this.loginStatus()
  }

  loginStatus = () => {
    axios.get('http://localhost:3001/logged_in', {withCredentials: true})
    .then(resp => {
      if (resp.data.logged_in) {
        this.handleLogin(resp)
      } else {
        this.handleLogout()
      }
    })
    .catch(error => console.log('api errors:', error))
  }

  handleLogin = (data) => { 
    this.setState({
      isLoggedIn: true,
      user: data.user
    })
  }

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
      user: {}
    })
  }

  
  render() { 

    return ( 
      <div>
        <BrowserRouter>
        <Switch>
        <Route exact path='/' component ={Home} /> 
        <Route exact path='/login' component={Login} /> 
        {/* <Route exact path='/signup' component={Signup} />  */}
        </Switch>
        </BrowserRouter>
      </div>
    )
  } 
}

export default App;
