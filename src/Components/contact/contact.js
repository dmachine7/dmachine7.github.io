import React, { useState } from 'react'
import { Form, Col } from 'react-bootstrap'
import { BiLeftArrow, BiDownArrow } from 'react-icons/bi'
import './contact.css'
import { toast, ToastContainer } from 'react-toastify'
import emailjs from 'emailjs-com'
import Resume from '../../Assets/Devang Agarwal - Web Developer.pdf';

const GetInTouch = () => {

  const [contactMessage, seContactMessage] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  })

  const { firstName, lastName, email, message } = contactMessage

  const handlechange = (name) => (e) => {
    seContactMessage({ ...contactMessage, [name]: e.target.value })
  }

  function sendEmail() {
    if (firstName && message) {
      emailjs.send('service_q3e6jin', 'template_ycrbwoh', contactMessage, 'user_HokXBFKsTxBegbp0DTRTW')
      .then(function (response) {
        toast.success("Thanks! I'll get back to you soon!");
        seContactMessage({ firstName: "", lastName: "", email: "", message: "" });
      }, function (err) {
        console.log('FAILED...', err);
        toast.error("Some mischief occured. Please send again");
      });
    } else {
      toast.error('Please fill required fields.')
    }
  }

  return (
    <section className='contact-home' data-aos='zoom-in'>
      <ToastContainer />
      <div className='section-head'>
        <h1>
          Reach out
        </h1>
        <span>Let's work together</span>
      </div>
      <div>
        <div className='reachout-wrapper'>
          <div>
            <Form>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Control type="text" placeholder="First Name*" className="contact-form-input" onChange={handlechange('firstName')} value={firstName} />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Control type="text" placeholder="Last Name" className="contact-form-input" onChange={handlechange('lastName')} value={lastName} />
                </Form.Group>
              </Form.Row>

              <Form.Group>
                <Form.Control type="email" placeholder="Email address*" className="contact-form-input" onChange={handlechange('email')} value={email} />
              </Form.Group>

              <Form.Group>
                <Form.Control as="textarea" rows={5} placeholder="Project description*" className="contact-form-input" onChange={handlechange('message')} value={message} />
              </Form.Group>

            </Form>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <button className='contact-form-button' onClick={sendEmail}>
                send request
              </button>
              <a href={Resume} aria-label="Resume" rel="noreferrer" download className='download-resume-link'>Download Resume</a>
            </div>
          </div>
        </div>
      </div>
      <div className='contact-through-social' data-aos='fade-left' data-aos-delay='200'>
        <BiLeftArrow /> or contact through these sites
      </div>
      <div className='contact-through-social-small' data-aos='fade-down' data-aos-delay='200'>
        <BiDownArrow /> or contact through these sites
      </div>
    </section>
  )
}

export default GetInTouch