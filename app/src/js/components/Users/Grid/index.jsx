import React from 'react';
import PropTypes from 'prop-types';

import Columns from './Partials/Columns';
import Rows from './Partials/Rows';

const Grid = (props) => {
	const { product, optionsClient } = props;
	return (
		<table className="striped centered">
			<Columns />
			{/* <Rows product={product} optionsProduct={optionsProduct} /> */}
		</table>
	);
}

Grid.propTypes = {
	product: PropTypes.array,
};

export default Grid;
