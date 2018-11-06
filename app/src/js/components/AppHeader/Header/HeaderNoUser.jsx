import React from 'react'
import { Link, Redirect } from "react-router-dom";
import PropTypes from 'prop-types';

const HeaderNoUser = ({ menu }) => {
    if (menu === "sidenav") {
        return (
            <ul id="slide-out" className="sidenav">
                <li>
                    <div className="user-view">
                        <div className="background">
                            <img src="/app/public/images/office.jpg" />
                        </div>
                        <Link to="/"><img className="circle" src="/app/public/images/yuna.jpg" /></Link>
                    </div>
                </li>
                <li><Link to="/login"><i className="material-icons">system_update_alt</i>Login</Link></li>
                <li><Link to="/register"><i className="material-icons">assignment</i>Register</Link></li>
            </ul>
        )
    }
    if (menu === "nav") {
        return (
            < ul className="right hide-on-med-and-down" >
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
            </ul >
        );
    }

};
HeaderNoUser.defaultProps = {
};

HeaderNoUser.propTypes = {
    menu: PropTypes.oneOf(['nav', 'sidenav'])
};

export default HeaderNoUser

