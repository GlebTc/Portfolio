import React, {useState} from "react"
import emailjs from "emailjs-com" //npm install emailjs

const Contact = ({title, id}:{title: string, id:string}) => {

      // Declaration of the state that will store data from the form inputs
  const [formData, setFormData] = useState (
    {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  )

  
// Funtion that collects data from form inputs and instantly applies it to the state.
  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {name:, value} = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: value
      }
    })
  }

  // Function that handles the submit button and usess emailjs to format and send data via email.
  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs.sendForm("service_sh5rr5e","template_i7nduro", e.target, "0gU9-7P7Fb0vD7eKY") // Arguments are: Service ID, Template ID, <input>, public key (the form onSubmit will specify the function that will run the emailjs)
  }

  // Great video on setting up emailjs: https://www.youtube.com/watch?v=t1_kviNJsy4

    return (
        <form id='contact-form' onSubmit={handleSubmit}>

                    <input
                      type='text'
                      className='form-control'
                      placeholder='Name'
                      onChange={handleChange}
                      name="name"
                      value={formData.name}
                    />

                    <input
                      type='email'
                      className='form-control'
                      placeholder='Email address'
                      onChange={handleChange}
                      name="email"
                      value={formData.email}
                    />

                    <input
                      type='text'
                      className='form-control'
                      placeholder='Subject'
                      onChange={handleChange}
                      name="subject"
                      value={formData.subject}
                    />

                    <textarea
                      rows={10}
                      className='form-control'
                      placeholder='Message'
                      onChange={handleChange}
                      name="message"
                      value={formData.message}
                    />

                <button className='submit-btn'>
                  Submit
                </button>
              </form>
    )
}

export default Contact