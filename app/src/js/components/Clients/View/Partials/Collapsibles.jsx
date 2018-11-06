import React from 'react';
import { Collapsible } from 'react-materialize';

import Progress from '../../../Common/Utils/Progress';
import FormCredit from './Form';
import ListClient from './List/ListClient';
import ListCredit from './List/ListCredit';
import CollapsibleItem from '../../../Common/Collapsible/CollapsibleItems';

const Collapsibles = (props) => {
    const { client } = props;
    if (!client.credit) {
        return (
            <Progress type="circle" />
        )
    }
    console.log(client.credit)

    let contentCollap = client.credit.addCredit  ? <ListCredit credit={client.credit} /> :  <FormCredit />;
    let headerCredit =client.credit.addCredit ? 'Detail Credit': 'Create Credit';
   
    return (
        <Collapsible popout>
            <CollapsibleItem header='Detail Client' icon='assignment'  content={<ListClient client={client} />} />
            <CollapsibleItem header={headerCredit} icon='credit_card' expanded content={contentCollap} />
        </Collapsible>
    );
};
export default Collapsibles;
