const Home = ({title, id,}:{title: string, id:string}) => {
    return (
        <section id={id} className="home__container">
            <p className="introduction" id={title}>
                Hello, <br /><br />
                Welcome to my website, <br /><br />

                My name is Gleb Tchani and I am a self-taught developer in the early stages of my career.  I have approximately 2 years of eperience working with frontend technologies.  First year was mostly spent using Youtube.  In September 2021, I have decided to emerge deeper and signed up for a "The Frontend Developer Career Path" through Scrimba.  In this course I covered the following technologies: <br /><br />
                <ul>
                    <li><span>HTML 5</span></li>
                    <li><span>CSS 3</span></li>
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