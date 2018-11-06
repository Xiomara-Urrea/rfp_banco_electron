import React from 'react';
import PropTypes from 'prop-types';

const Progress = ({ type }) => type === "linear" ? (
    <div className="progress">
        <div className="indeterminate"></div>
    </div>
) : (
        <div className="center-align">
            <div className="preloader-wrapper active">
                <div className="spinner-layer spinner-blue-only">
                    <div className="circle-clipper left">
                        <div className="circle"></div>
                    </div><div className="gap-patch">
                        <div className="circle"></div>
                    </div><div className="circle-clipper right">
                        <div className="circle"></div>
                    </div>
                </div>
            </div>
        </div>
    );

Progress.defaultProps = {
    type: 'linear'
}

Progress.propsType = {
    type: PropTypes.oneOf(['linear', 'circle']),
}

export default Progress;