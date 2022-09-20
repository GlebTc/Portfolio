const Home = ({title, id}:{title: string, id:string}) => {
    return (
        <section id={id} className="home__page">
            <h1>{title}</h1>
            <div className="content__container">
                <div className="introduction__text">
                    <div className="introduction">
                        <p>Welcome to my website,</p>

                        <p>My name is <span>Gleb Tchani</span>.  I have approximately 2 years of experience working with various frontend technologies.  One of the things that attracts me to software development is an unlimited learning opportunity.  There is always room to improve your current knowledge or learn something completely new.  I am looking for an opportunity to work with an experienced team and mentor(s) for mutual future growth and success.  As you navigate through my portfolio, you will find that I have experience working with the following stack:</p>
                        <ul>
                            <li><p><span>HTML 5</span></p></li>
                            <li><p><span>CSS 3 (SCSS)</span></p></li>
                            <li><p><span>JavaScript</span></p></li>
                            <li><p><span>React JS</span></p></li>
                        </ul>
                        <p>Currently I am working on small individual projects to build websites for local businesses, freelance contracting opportunities to improve existing applications as well as projects of my own to extend my knowledge and expertise.<br /><br />
                        I have recently began implementing <span>TypeScript</span>, <span>GtiHub</span>, <span>Node JS</span>, <span>Express</span> and <span>PostgreSQL</span>. I am open to learning other stack options if it is a better fit.  I adapt very well to new technologies and am prepared to direct my learning to areas best suited for my employer.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home