import React from "react";

const About = ({title, id}:{title:string, id:string}) => {
    return (
        <section id={id} className="about__page">
            <h1>{title} Me</h1>
            <div className="content__container">
                <p className="about__text" id={title}>
                    <div className="about">
                        Educational Background:
                        <br /> <br />
                        <ul>
                            <li><span>Frontend Developer Bootcamp</span></li>
                            <li><span>BBA (Finance)</span></li>
                            <li><span>International Marketing Management</span></li>
                            <li><span>Business Marketing</span></li>
                        </ul>
                        <br />
                        First post-secondary education was Business Marketing diploma.  I further continued my education at Brock University, where I obtained a Business Administration degree with honours, with a concentration in Finance.  I have developed strong communication and problem solving skills.  Aside from the curriculum, I have learned to properly manage my time and prioritize my tasks.
                        <br /><br />
                        Professional Background:
                        <br /> <br />
                        <ul>
                            <li><span>Real Estate</span></li>
                            <li><span>Mortgage Financing</span></li>
                            <li><span>Life Insurance</span></li>
                        </ul>
                        <br />
                        I have experience working individually, as part of a team, and as a member of a large organization. Working individually, I am very <span>organized</span>, <span>detail oriented</span> and committed to <span>high level of efficiency</span>. As part of a team, I am very <span>supportive</span>, embrace constructive criticism and always ready to assist.
                        <br /><br />
                        As an individual, I come from culturally and religiously diverse family and experience of living and working in significantly different environments.
                    </div>
                </p>
            </div>
        </section>
    )
}

export default About