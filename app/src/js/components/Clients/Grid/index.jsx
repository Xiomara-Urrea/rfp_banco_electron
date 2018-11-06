import React from 'react';
import PropTypes from 'prop-types';

import Columns from './Partials/Columns';
import Rows from './Partials/Rows';

const Grid = (props) => {
	const { clients, optionsClient } = props;
	return (
		<table className="striped centered">
			<Columns />
			<Rows clients={clients} optionsClient={optionsClient} />
		</table>
	);
}

Grid.propTypes = {
	clients: PropTypes.array,
};

export default Grid;
