//create a carousel for the portfolio with three items
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { CarouselItem } from 'react-bootstrap';

type portfolioProps = {
  title: string,
  id: string
}

const Portfolio = ({title, id}: portfolioProps) => {
  return (
    <div className="portfolio">
      <h1>{title}</h1>
      <Carousel className="portfolio__gallery">
        <Carousel.Item>
          <div className="portfolio__gallery__item">
            <h2>Edo Reno</h2>
            <a href="https://edoreno.netlify.app/" target="_blank" rel="noreferrer">
              <img src="portfolio__item__1.png" alt="Edo Reno Website" className="portfolio__image"/>
            </a>
            <div className="portfolio__gallery__item__description">
              <p>This is one of the first projects in <span>React JS</span>.  The focus of this project was to create a <span>Mobile-First UI</span> and create a functional contact form.  There is no backend and an <span>EmailJS</span> package was used to add functionality to the contact form.</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="portfolio__gallery__item">
            <h2>Pet Finder</h2>
            <a href="https://edoreno.netlify.app/" target="_blank" rel="noreferrer">
              <img src="portfolio__item__1.png" alt="Edo Reno Website" className="portfolio__image"/>
            </a>
            <div className="portfolio__gallery__item__description">
              <p>This is one of the first projects in <span>React JS</span>.  The focus of this project was to create a <span>Mobile-First UI</span> and create a functional contact form.  There is no backend and an <span>EmailJS</span> package was used to add functionality to the contact form.</p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
    
export default Portfolio;
