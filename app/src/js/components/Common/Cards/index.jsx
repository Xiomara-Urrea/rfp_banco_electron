import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icons';

const Cards = ({ className, classNameImage, cardContent, cardTitle, cardTitleReleveal, cardContentReveal, cardContentIcon, cardImage, cardfloatingBtn, cardActios, icons }) => (
    <div className={`card ${className}`}>
        <div className={`card-image ${classNameImage}`}>
            {cardImage && <img className="activator" src="https://t1.ev.ltmcdn.com/es/posts/3/9/3/img_un_bano_de_bosque_el_arte_de_disfrutar_de_la_naturaleza_393_600.jpg" />}
            {cardTitle && <span className="card-title">{cardTitle}</span>}
            {cardfloatingBtn && <a className="btn-floating halfway-fab waves-effect waves-light red"><Icon icon={icons.floating} className="right" /></a>}
        </div>
        <div className="card-content">
            {cardContentReveal && <span className="card-title activator grey-text text-darken-4">{cardTitleReleveal}<Icon icon={icons.activatorReveal} className="right" /></span>}
            {cardContent}
        </div>
        {cardActios && <div className="card-action center-align">
            {cardActios}
        </div>}
        {cardContentReveal && <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">{cardContentIcon}<Icon icon={icons.closeReveal} className="right" /></span>
            {cardContentReveal}
        </div>}
    </div>
);

Cards.defaultPropTypes = {
    className: '',
    classNameImage: '',
    cardTitle: 'LPA Software',
    cardTitleReleveal: 'LPA',
    icons: {
        floating: "add",
        activatorReveal: "more_vert",
        closeReveal: "close"
    }
}

Cards.propTypes = {
    cardTitle: PropTypes.any.isRequired,
    cardContentReveal: PropTypes.any.isRequired,
    icons: PropTypes.shape({
        floating: PropTypes.any,
        activatorReveal: PropTypes.any,
        closeReveal: PropTypes.any
    }),
}

export default Cards

