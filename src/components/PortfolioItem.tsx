import React from 'react';

type portfolioProps = {
    title: string,
    id: string,
    imgSrc: string,
    description: string,
    url: string
}

const PortfolioItem = ({title, id, imgSrc, description, url}: portfolioProps) => {
    return (
        <div className="portfolio__gallery__item" key={Number(id)}>
            <h2>{title}</h2>
            <a href={url} target="_blank" rel="noreferrer">
                <img src={imgSrc} alt={title} />
            </a>
            <div className="portfolio__gallery__item__description">
                <p>{description}</p>
            </div>
        </div>
    );
}

export default PortfolioItem;