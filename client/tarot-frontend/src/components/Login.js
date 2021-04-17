import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Login extends Component { 
    state = {
        username: '',
        email: '',
        password: '',
        errors: ''
    }


    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    render() { 
        const {username, email, password} = this.statereturn (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        placeholder="username"
                        type="text"
                        name="username"
                        value={username}
                        onChange={this.handleChange}
                    />
                    <input 
                        placeholder="email"
                        type="text"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                    />
                    <input 
                        placeholder="password"
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                    />
                    <button placeholder="Submit" type="submit">Login</button>
                    <div>
                        or <Link to='/signup'>Signup</Link>
                    </div>
                </form>
            </div>
        )
    }

}

export default Login;