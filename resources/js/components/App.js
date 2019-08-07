import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header'

export default class Example extends Component {
    render () {
        return (
            <BrowserRouter>
            <div>
                <Header />
            </div>
            </BrowserRouter>
        )
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<Example />, document.getElementById('app'));
}