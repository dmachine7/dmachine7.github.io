import React, {useState} from 'react'
import { Form,Col } from 'react-bootstrap'
import { BiRightArrow } from 'react-icons/bi'
import './contact.css'
import { toast, ToastContainer } from 'react-toastify'
import emailjs from 'emailjs-com'
import Resume from '../../Assets/Devang Agarwal - Web Developer.pdf'

const ContactForm = () => {
  const closeContactForm = () => {
    document.getElementById('contact-form').style.marginRight = '-100vw'
  }

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
    <div id='contact-form'>
    <ToastContainer />
      <div className='contact-form-wrapper'>
        <div className='contact-form-head'>
          <h3>Hello! Let's work together</h3>
          <span style={{cursor: 'pointer'}} onClick={closeContactForm}><BiRightArrow /></span>
        </div>
        <div className='contact-form-fields'>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Control type="text" placeholder="First Name*" className="contact-form-input" onChange={handlechange('firstName')} value={firstName}/>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Control type="text" placeholder="Last Name" className="contact-form-input" onChange={handlechange('lastName')} value={lastName}/>
              </Form.Group>
            </Form.Row>

            <Form.Group>
              <Form.Control type="email" placeholder="Email address*" className="contact-form-input" onChange={handlechange('email')} value={email}/>
            </Form.Group>

            <Form.Group>
              <Form.Control as="textarea" rows={5} placeholder="Project description*" className="contact-form-input" onChange={handlechange('message')} value={message}/>
            </Form.Group>

            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
              <button className='contact-form-button' onClick={sendEmail}>
                send request
              </button>
              <a href={Resume} aria-label="Resume" rel="noreferrer" download className='download-resume-link'>Download Resume</a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm