const Home = ({title, id}:{title: string, id:string}) => {
    return (
        <section id={id} className="home__container">
            <h1>{title}</h1>
            <p className="introduction" id={title}>
                <div className="introduction__text">
                                    Welcome to my website, <br /> <br />

                My name is <span>Gleb Tchani</span> and I am a self-taught software developer in the early stages of my career.  I have approximately 2 years of experience working with various frontend technologies.  As you navigate to my portfolio, you can see that I have experience with the following stack:<br /><br />
                <ul>
                    <li><span>HTML 5</span></li>
                    <li><span>CSS 3 (SCSS)</span></li>
                    <li><span>JavaScript</span></li>
                    <li><span>React JS</span></li>
                </ul>
                <br />
                I have since taken on small individual projects to build websites for local businesses, freelance contracting opportunities to improve existing websites as well as projects of my own to improve my knowledge and expertise.<br /><br />
                Currently I am working on implementing <span>TypeScript</span> into my code and exploring <span>Node JS</span> and <span>Express</span> to have better understanding of backend.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate et nihil molestiae illum dicta sit, odio accusantium saepe? Illum corporis quod corrupti expedita rerum repudiandae eveniet minus ipsam hic recusandae placeat dolorem maiores delectus optio odio at fugit minima, quibusdam aut voluptates ducimus voluptatum, cum voluptatem odit! Architecto, tempora nisi!
                </div>
            </p>
        </section>
    )
}

export default Home