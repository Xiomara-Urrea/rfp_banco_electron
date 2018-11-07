import React from 'react';

import FormConsig from './Forms/FormConsig';
import FormRetire from './Forms/FormRetire';
import FormTransfer from './Forms/FormTransfer';
const Card = (props) => {
    return (
        <div>
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">Consignar<i className="material-icons right">more_vert</i></span>
                    <FormConsig />
                </div>
            </div>
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">Transferir<i className="material-icons right">more_vert</i></span>
                    <FormTransfer />
                </div>
            </div>
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">Retirar<i className="material-icons right">more_vert</i></span>
                    <FormRetire />
                </div>
            </div>
        </div>
    );
};
export default Card;
