import React from 'react'
import { Form, Button, Col, Row } from 'react-bootstrap'
import { BiRightArrow } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import './contact.css'

const ContactForm = () => {
  const closeContactForm = () => {
    if (window.innerWidth >= 1200) {
      document.getElementById('contact-form').style.marginRight = '-37vw'
    } else if (window.innerWidth >= 800) {
      document.getElementById('contact-form').style.marginRight = '-50vw'
    } else {
      document.getElementById('contact-form').style.marginRight = '-100vw'
    }
  }

  return (
    <div id='contact-form'>
      <div className='contact-form-wrapper'>
        <div className='contact-form-head'>
          <h3>Hello! Let's work together</h3>
          <span style={{cursor: 'pointer'}} onClick={closeContactForm}><BiRightArrow /></span>
        </div>
        <div className='contact-form-fields'>
          <Form>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Control type="text" placeholder="First Name" className="contact-form-input" />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Control type="text" placeholder="Last Name" className="contact-form-input" />
              </Form.Group>
            </Form.Row>

            <Form.Group>
              <Form.Control type="email" placeholder="Email address" className="contact-form-input" />
            </Form.Group>

            <Form.Group>
              <Form.Control as="textarea" rows={5} placeholder="Project description" className="contact-form-input" />
            </Form.Group>

            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
              <button className='contact-form-button'>
                send request
              </button>
              <Link className='download-resume-link'>Download Resume</Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default ContactForm