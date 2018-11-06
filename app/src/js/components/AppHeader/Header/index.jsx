import React, { Component } from 'react'
import { connect } from 'react-redux'

import HeaderNoUser from './HeaderNoUser'
import HeaderUser from './HeaderUser'

class Header extends Component {
    render() {
        const { name, isLoggedIn } = this.props;
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <a href="#!" className="brand-logo">{name}</a>
                        <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        {isLoggedIn ? <HeaderUser menu="nav" /> : <HeaderNoUser menu="nav" />}
                    </div>
                </nav>
                <p></p>
                {isLoggedIn ? <HeaderUser menu="sidenav" /> : <HeaderNoUser menu="sidenav" />}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.authentication.loggedIn,
    };
};

export default connect(mapStateToProps)(Header);
