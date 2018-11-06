import React from 'react'
import PropTypes from 'prop-types'
import { CollapsibleItem } from 'react-materialize';

const CollapsibleItems = ({ header, icon, content, className, expanded }) => (
    <CollapsibleItem
        className={className}
        header={header}
        icon={icon}
        expanded={expanded}
    >
        {content}
    </CollapsibleItem>
);

CollapsibleItems.defaultProps = {
    header: 'LACMA',
    icon: 'indeterminate_check_box',
};

CollapsibleItems.propTypes = {
    header: PropTypes.string,
};

export default CollapsibleItems;

