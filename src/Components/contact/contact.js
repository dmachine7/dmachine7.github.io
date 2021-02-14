import React from 'react'
import { Form, Button, Col } from 'react-bootstrap'
import { BiLeftArrow, BiDownArrow } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import './contact.css'

const GetInTouch = () => {
  return (
    <section className='contact-home' data-aos='zoom-in'>
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

            </Form>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
              <button className='contact-form-button'>
                send request
              </button>
              <Link className='download-resume-link'>Download Resume</Link>
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