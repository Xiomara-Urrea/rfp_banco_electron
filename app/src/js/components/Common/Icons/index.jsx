import React from 'react'
import PropTypes from 'prop-types'

const Icons = ({ className, icon }) => {
    return (
        <i
            className={`material-icons ${className}`}
        >
            {icon}
        </i>
    );
};

Icons.defaultProps = {
    className: ' material-icons ',
    icon: 'do_not_disturb',
};

Icons.propTypes = {
    className: PropTypes.string,
    icon: PropTypes.string.isRequired,
};

export default Icons;