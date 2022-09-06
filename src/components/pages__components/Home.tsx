const Home = ({title, id}:{title: string, id:string}) => {
    return (
        <section id={id} className="home__page">
            <h1>{title}</h1>
            <div className="content__container">
                <p className="introduction__text">
                    <div className="introduction">
                    Welcome to my website, <br /> <br />

                    My name is <span>Gleb Tchani</span>.  I have approximately 2 years of experience working with various frontend technologies.  One of the things that attracts me to software development is an unlimited learning opportunity.  There is always room to improve your current knowledge or learn something completely new.  I am looking for an opportunity to work with an experienced team and mentor(s) for mutual future growth and success.  As you navigate through my portfolio, you will find that I have experience working with the following stack:<br /><br />
                    <ul>
                        <li><span>HTML 5</span></li>
                        <li><span>CSS 3 (SCSS)</span></li>
                        <li><span>JavaScript</span></li>
                        <li><span>React JS</span></li>
                    </ul>
                    <br />
                    Currently I am working on small individual projects to build websites for local businesses, freelance contracting opportunities to improve existing applications as well as projects of my own to extend my knowledge and expertise.<br /><br />
                    I am also working on implementing <span>TypeScript</span> into my code and exploring <span>Node JS</span> and <span>Express</span> to have better understanding of backend.  I adapt very well to new technologies and am prepared to direct my learning to areas best suited for my employer.
                    </div>
                </p>

            </div>
        </section>
    )
}

export default Home