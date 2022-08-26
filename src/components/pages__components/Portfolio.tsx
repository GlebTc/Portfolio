//create a carousel for the portfolio with three items
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

type portfolioProps = {
  title: string,
  id: string
}

const Portfolio = ({title, id}: portfolioProps) => {
  return (
    <div className="portfolio ">
      <h1>{title}</h1>
      <Carousel className="portfolio__gallery content__container">
        <Carousel.Item className='carousel__item'>
          <div className="portfolio__gallery__item">
            <h2>Edo Reno</h2>
            <div className="portfolio__gallery__item__image">
            <a href="https://edoreno.netlify.app/" target="_blank" rel="noreferrer">
              <img src="portfolio__item__1.png" alt="Edo Reno Website" />
            </a>
            </div>
            <div className="portfolio__gallery__item__description">
              <p>This is one of the first projects in <span>React JS</span>.  The focus of this project was to create a <span>Mobile-First UI</span> using <span>SCSS</span> and create a functional contact form.  There is no backend and an <span>EmailJS</span> package was used to add functionality to the contact form.</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="portfolio__gallery__item">
            <h2>Pet Finder</h2>
            <div className="portfolio__gallery__item__image">
            <a href="https://petfindertool.netlify.app" target="_blank" rel="noreferrer">
              <img src="portfolio__item__2.png" alt="Pet Finder Tool" />
            </a>
            </div>
            <div className="portfolio__gallery__item__description">
              <p>This is my second project where I have added extra features.  I have implemented <span>Custom Reusable Components</span>, implemented the use of <span>axios</span> to fetch data from PetFinder Api.  For the website design I used <span>Material UI</span>.</p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
    
export default Portfolio;


/* <div className="portfolio">
<h1>{title}</h1>
<Carousel className="portfolio__gallery" id={title}>
  {PortfolioData.map((item) => {
    return (
      <Carousel.Item>
        <PortfolioItem key={item.id} title={item.title} id={item.id} imgSrc={item.imgSrc} description={item.description} url={item.url} />;
      </Carousel.Item>
    )}
  )}
</Carousel>
</div> */