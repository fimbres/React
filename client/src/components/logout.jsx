import React, { Component } from 'react'

class Logout extends Component {
    componentDidMount() {
        localStorage.removeItem('authToken');
        window.location = '/welcome';
    }

    render() { 
        return null;
    }
}
 
export default Logout;