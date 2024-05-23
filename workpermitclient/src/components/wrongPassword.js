import React, { Component } from 'react'

export default class wrongPassword extends Component {
    render() {
        return (
            <div className="wrongPassword">
                <h2>Ooops!!! You Entered The Wrong Password</h2>
                <p>Click <a href='/'>here</a> to Login again</p>
            </div>
        )
    }
}
