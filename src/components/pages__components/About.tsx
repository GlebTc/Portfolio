import React from "react";

const About = ({title, id}:{title:string, id:string}) => {
    return (
        <section id={id} className="about__page">
            <h1>{title} Me</h1>
            <div className="content__container">
                <div className="about__text" id={title}>
                    <div className="about">
                        <p>Educational Background:</p>
                        <ul>
                            <li><p><span>Frontend Developer Bootcamp</span></p></li>
                            <li><p><span>International Marketing Management</span></p></li>
                            <li><p><span>Business Marketing</span></p></li>
                            <li><p><span>BBA (Finance)</span></p></li>
                        </ul>
                        <p>After completing a Business Marketing college program, I further continued my education at Brock University, where I obtained a Business Administration degree with honours, with a concentration in Finance.  I have developed strong communication and problem solving skills.  Aside from the curriculum, I have learned to properly manage my time and prioritize my tasks.
                        Professional Background:</p>
                        <ul>
                            <li><p><span>Real Estate</span></p></li>
                            <li><p><span>Mortgage Financing</span></p></li>
                            <li><p><span>Life Insurance</span></p></li>
                        </ul>
                        <p>I have experience working individually, as part of a team, and as a member of a large organization. Working individually, I am very <span>organized</span>, <span>detail oriented</span> and committed to <span>high level of efficiency</span>. As part of a team, I am very <span>supportive</span>, embrace constructive criticism and always ready to assist.
                        <br /><br />
                        As an individual, I come from culturally and religiously diverse background and experience of living and working in significantly different environments.  I am very personable and enjoy meeting new people.  I am a very <span>positive</span> and <span>optimistic</span> person and I am always looking for ways to improve myself and my surroundings.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About