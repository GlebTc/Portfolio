import React from "react";

const About = ({ title, id }: { title: string; id: string }) => {
  return (
    <section id={id} className="about__page">
      <h1>{title} Me</h1>
      <div className="content__container">
        <div className="about__text" id={title}>
          <div className="about">
            <p>Educational Background:</p>
            <ul>
              <li>
                <p>
                  <span>Frontend Developer Bootcamp</span>
                </p>
              </li>
              <li>
                <p>
                  <span>International Marketing Management</span>
                </p>
              </li>
              <li>
                <p>
                  <span>Business Marketing</span>
                </p>
              </li>
              <li>
                <p>
                  <span>BBA (Finance)</span>
                </p>
              </li>
            </ul>
            <p>
              Upon finishing my Business Marketing college program, I pursued a
              Business Administration degree with honours at Brock University,
              majoring in Finance. Throughout my studies, I have cultivated
              robust communication and problem-solving skills that have proven
              invaluable in various professional settings. Additionally, I have
              honed my ability to effectively manage my time and prioritize
              tasks outside of the curriculum. Overall, my education has
              provided me with a strong foundation of skills that have allowed
              me to thrive in diverse and dynamic environments. I am eager to
              bring my expertise and knowledge to new challenges and
              opportunities in the future.
              <br /><br />
              <p>Professional Background:</p>
            </p>
            <ul>
              <li>
                <p>
                  <span>Real Estate</span>
                </p>
              </li>
              <li>
                <p>
                  <span>Mortgage Financing</span>
                </p>
              </li>
              <li>
                <p>
                  <span>Life Insurance</span>
                </p>
              </li>
            </ul>
            <p>
            My experience has equipped me with the ability to work both independently and as part of a team, whether in a small group or a larger organization. When working individually, I pride myself on my strong organizational skills, meticulous attention to detail, and commitment to achieving maximum efficiency. As a team member, I prioritize being supportive, open to constructive criticism, and always willing to lend a helping hand. <br /> <br />Moreover, I have a background that is diverse in culture and religion, which has allowed me to live and work in a variety of environments. I am an affable person who enjoys meeting new people and building relationships. My optimistic and positive outlook on life is something that I carry with me in all that I do, and I constantly strive to improve myself and my surroundings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
