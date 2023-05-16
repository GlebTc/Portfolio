const Home = ({ title, id }: { title: string, id: string }) => {
  return (
  <section id={id} className="home__page">
  <h1>{title}</h1>
  <div className="content__container">
  <div className="introduction">
  <p className="introduction__text">
  Welcome to my website, <br /><br />
  My name is <span>Gleb Tchani</span>. I have approximately three years of experience working with various frontend technologies. One of the things that attracts me to software development is the unlimited learning opportunity. There is always room to improve your current knowledge or learn something completely new. I am looking for an opportunity to work with an experienced team and mentor(s) for mutual future growth and success.
  </p>
  <p className="introduction__text">
  As you navigate through my portfolio, you will find that I have experience working with the following stack:
  </p>
  <ul>
  <li><span>Front End</span> - HTML5, CSS3, ReactJS</li>
  <li><span>Back End</span> - JavaScript, Express, Node TypeScript</li>
  <li><span>Database Management</span> - PSQL</li>
  <li><span>Other Skills</span> - Git, JEST, JIRA</li>
  </ul>
  <p className="introduction__text">
  Currently, I am working on individual projects to build websites for local businesses, freelance contracting opportunities to improve existing applications, as well as personal projects that allow me to extend my knowledge and expertise. I am dedicated to continuously improving my skills in front-end development, back-end development, and database management, and actively seek out new learning opportunities. By staying up-to-date with the latest industry trends and technologies, I am able to deliver high-quality solutions that meet the needs of my clients and exceed their expectations.
  </p>
  </div>
  </div>
  </section>
  )
  }
  
  export default Home