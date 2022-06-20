import React from "react";



const About = ({title, id}:{title:string, id:string}) => {
    return (
        <section id={id} className="about__container">
            <h1>{title}</h1>
        </section>
    )
}

export default About