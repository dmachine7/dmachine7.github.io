import React, {useState} from 'react'
import { Form,Col } from 'react-bootstrap'
import { BiRightArrow } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import './contact.css'
import { toast, ToastContainer } from 'react-toastify'
import emailjs from 'emailjs-com'


const ContactForm = () => {
  const closeContactForm = () => {
    // if (window.innerWidth >= 1200) {
    //   document.getElementById('contact-form').style.marginRight = '-37vw'
    // } else if (window.innerWidth >= 800) {
    //   document.getElementById('contact-form').style.marginRight = '-50vw'
    // } else {
    //   document.getElementById('contact-form').style.marginRight = '-100vw'
    // }
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
    if(firstName && message){
      emailjs.send('service_wmmn1mc', 'template_zfgcu9l', contactMessage, 'user_kOM812vqGT0AINxPmaGol')
      .then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
        toast.success("Mail Sent");
        seContactMessage({ firstName: "", lastName: "", email: "", message: "" });
      }, function (err) {
        console.log('FAILED...', err);
        toast.error("There is an issue sending your request. Please try again later.");
      });
    }else{
      toast.error('please enter firstname and message')
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
                <Form.Control type="text" placeholder="First Name" className="contact-form-input" onChange={handlechange('firstName')} value={firstName}/>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Control type="text" placeholder="Last Name" className="contact-form-input" onChange={handlechange('lastName')} value={lastName}/>
              </Form.Group>
            </Form.Row>

            <Form.Group>
              <Form.Control type="email" placeholder="Email address" className="contact-form-input" onChange={handlechange('email')} value={email}/>
            </Form.Group>

            <Form.Group>
              <Form.Control as="textarea" rows={5} placeholder="Project description" className="contact-form-input" onChange={handlechange('message')} value={message}/>
            </Form.Group>

            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
              <button className='contact-form-button' onClick={sendEmail}>
                send request
              </button>
              <Link className='download-resume-link'>Download Resume</Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm