import React from 'react';
import PropTypes from 'prop-types';

import Columns from './Partials/Columns';
import Rows from './Partials/Rows';

const Grid = (props) => {
	const { accounts, optionsAccount } = props;
	return (
		<table className="striped centered">
			<Columns />
			<Rows accounts={accounts} optionsAccount={optionsAccount} />
		</table>
	);
}

Grid.propTypes = {
	clients: PropTypes.array,
};

export default Grid;
