import React from "react";



const About = ({title, id}:{title:string, id:string}) => {
    return (
        <section id={id} className="about__container">
            <h1>{title} Me</h1>
            <p className="about" id={title}>
                Educational Background:<br /> <br />
                <ul>
                    <li><span>Frontend Developer Bootcamp</span></li>
                    <li><span>BBA (Finance)</span></li>
                    <li><span>International Marketing Management</span></li>
                    <li><span>Business Marketing</span></li>
                </ul>
                Professional Background:<br /> <br />
                <ul>
                    <li><span>Real Estate</span></li>
                    <li><span>Mortgage Financing</span></li>
                    <li><span>Life Insurance</span></li>
                    <li><span>Healthcare</span></li>
                </ul>
                I have experience working individually, as part of a team, and as a member of a large organization. Working individually, I am very <span>organized</span>, <span>detail oriented</span> and committed to <span>high level of efficiency</span>. As part of a team, I am very <span>supportive</span>, embrace constructive criticism and always ready to assist.
            </p>
        </section>
    )
}

export default About