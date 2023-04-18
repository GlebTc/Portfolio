const Home = ({ title, id }: { title: string; id: string }) => {
  return (
    <section id={id} className="home__page">
      <h1>{title}</h1>
      <div className="content__container">
        <div className="introduction__text">
          <div className="introduction">
            <p>Welcome to my website,</p>

            <p>
              My name is <span>Gleb Tchani</span>. With around two years
              of experience in working with various frontend technologies, I am
              a passionate software developer who is always eager to learn and
              improve my skills. I am particularly attracted to the software
              development field because of its unlimited opportunities for
              learning and growth.
              <br /><br />I am actively seeking an opportunity to work with an
              experienced team and mentor(s) who can help me achieve mutual
              growth and success. As you explore my portfolio, you will notice
              that I have worked with a diverse range of technologies and
              stacks, including:
            </p>
            <ul>
              <li>
                <p>
                  <span>HTML 5</span>
                </p>
              </li>
              <li>
                <p>
                  <span>CSS 3 (SCSS)</span>
                </p>
              </li>
              <li>
                <p>
                  <span>JavaScript</span>
                </p>
              </li>
              <li>
                <p>
                  <span>React JS</span>
                </p>
              </li>
            </ul>
            <p>
            Currently, I am involved in several projects that allow me to build websites for local businesses and enhance existing applications as a freelance contractor. In addition to these projects, I am also working on personal projects to broaden my knowledge and expertise.<br /><br />

Recently, I have begun exploring various technologies, such as <span>TypeScript</span>, <span>GitHub</span>, <span>Node JS</span>, <span>Express</span>, and <span>PostgreSQL</span>. While these are my current areas of focus, I am always open to learning new technologies that align with my employer's needs. I adapt well to new challenges and am committed to directing my learning towards areas that will best serve my employer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
