//create a carousel for the portfolio with three items
import React from 'react';


const Portfolio = ({title, id}:{title: string, id:string}) => {
  return (
    <div className="portfolio">
      <h1>{title}</h1>
      <div className="portfolio-gallery">
        <div className="portfolio-gallery-item">
          <a href="https://candid-donut-35bb17.netlify.app/" target="_blank" rel="noreferrer">
            <img src="portfolio__item__1.png" alt="candid-donut-35bb17" className="portfolio__image"/>
          </a>
          </div>
      </div>
    </div>

  );
}
    
export default Portfolio;