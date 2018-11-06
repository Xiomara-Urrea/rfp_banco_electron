import React from 'react'
import ActionBarView from './Partials/ActionBarView';
import PayInput from '../../../../Common/Input';

const Pay = (props) => (
    <div>
        <PayInput
            id="payCredit"
            name="payCredit"
            // value={props.client.firstName ? props.client.firstName: "" }
            text="Pay Credit"
            autoFocus={true}
            icon="account_circle"
            classNameIcon="prefix"
            onChange={(e) => props.loadCredit(e)}
        />
        <ActionBarView updateCredit={props.updateCredit} />
    </div>
);

export default Pay
