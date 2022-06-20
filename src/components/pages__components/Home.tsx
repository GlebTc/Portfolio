const Home = ({title, id}:{title: string, id:string}) => {
    return (
        <section id={id} className="home__container">
            <h1>{title}</h1>
        </section>
    )
}

export default Home