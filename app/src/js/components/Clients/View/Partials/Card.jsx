import React from 'react';

import Collapsibles from './Collapsibles';
import Pay from './Pay';
import Cards from '../../../Common/Cards';

const ICONS = { floating: "add", activatorReveal: "more_vert", closeReveal: "close" }

const Card = (props) => (
    <Cards
        cardTitle={`${props.client.firstName} ${props.client.lastName}`}
        classNameImage=" waves-effect waves-block waves-light"
        cardContent={<Collapsibles {...props} />}
        cardContentReveal={<Pay {...props} />}
        cardContentIcon={props.client.firstName}
        cardTitleReleveal="Details Client"
        icons={ICONS}
        cardImage
    />
);

export default Card;
