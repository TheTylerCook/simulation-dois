import React, { Component } from 'react';
import axios from 'axios';





export default class RegisterUser extends Component {
    constructor() {
        super()

        this.state = {

        }
        this.atRegister = this.atRegister.bind(this)

    }

    atRegister() {
        let newUser = {
            username: this.refs.username.value,
            password: this.refs.password.value

        }

        axios.post('/api/users', newUser).then((res) => {
            return res.data
        })
        this.refs.username.value='',
        this.refs.password.value=''
    }








render() {
    return (
        <div className='reg_wrapper'>
        <input placeholder='username' ref='username'/>
        <input placeholder='password' ref='password'/>
        <button onClick={this.atRegister}>Register</button>
        </div>
    )

}
}

