const Home = ({title, id}:{title: string, id:string}) => {
    return (
        <section id={id} className="home__container">
            <h1>{title}</h1>
            <p className="introduction" id={title}>
                Hello, <br /><br />
                Welcome to my website, <br /><br />

                My name is <span>Gleb Tchani</span> and I am a self-taught software developer in the early stages of my career.  I have approximately 2 years of experience working with various frontend technologies.<br /><br />
                <ul>
                    <li><span>HTML 5</span></li>
                    <li><span>CSS 3 (SCSS)</span></li>
                    <li><span>JavaScript</span></li>
                    <li><span>React JS</span></li>
                </ul>
                <br />
                I have since taken on small individual projects to build websites for local businesses as well as freelance contracting opportunities to improve existing websites.<br /><br />
                Currently I am working on implementing <span>TypeScript</span> into my code and am hoping to soon begin exploring <span>Node JS</span> to have better understanding of backend.
            </p>
        </section>
    )
}

export default Home