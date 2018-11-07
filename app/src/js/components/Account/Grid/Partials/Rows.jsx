import React from 'react';
import PropTypes from 'prop-types';

import Row from './Row';

const Rows = ({ accounts, optionsAccount }) => (
	<tbody>
		{
			accounts.map(
				(account, index) => <Row key={index} account={account} optionsAccount={optionsAccount} />
			)
		}
	</tbody>
);

Rows.propTypes = {
	clients: PropTypes.array,
};

export default Rows;
