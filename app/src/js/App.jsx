import React, { Component } from 'react'
import { connect } from 'react-redux'

import Routes from "./routes";

class App extends Component {
    render() {
        console.log(this.props);
        return (
            <Routes />
        )
    }
}

export default connect()(App)
