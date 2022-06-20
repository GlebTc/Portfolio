const Contact = ({title, id}:{title: string, id:string}) => {
    return (
        <section id={id} className="contact__container">
            <h1>{title}</h1>
        </section>
    )
}

export default Contact