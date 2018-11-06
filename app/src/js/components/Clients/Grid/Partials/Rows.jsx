import React from 'react';
import PropTypes from 'prop-types';

import Row from './Row';

const Rows = ({ clients, optionsClient }) => (
	<tbody>
		{
			clients.map(
				(client, index) => <Row key={index} client={client} optionsClient={optionsClient} />
			)
		}
	</tbody>
);

Rows.propTypes = {
	clients: PropTypes.array,
};

export default Rows;
