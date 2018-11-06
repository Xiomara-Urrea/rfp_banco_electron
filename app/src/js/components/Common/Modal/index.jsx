import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-materialize';


const Modals = ({ id, header, content }) => {
    return (
        <Modal
            id={id}
            header={header}
        >
            {content}
      </Modal>
    );
};

Modals.defaultProps = {
    header: 'LPA'
};

Modals.propTypes = {
    header: PropTypes.string,
};

export default Modals;
