const Portfolio = ({title, id}:{title: string, id:string}) => {
    return (
        <section id={id} className="portfolio__container">
            <h1>{title}</h1>
        </section>
    )
}

export default Portfolio