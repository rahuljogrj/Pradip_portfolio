import React from 'react'
import { Link } from "react-router-dom";
import SocialIcons from '../components/SocialIcons'


const Contact = () => {
  return (
    <div>
      <div className="container bg-white">

        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-11 px-3 py-3">
              <h1 className="fw-bolder">
                Let's Get in Touch: Ways to Connect with Me
              </h1>
              <p>
                Thank you for your interest in getting in touch with me. I welcome
                your feedback, questions, and suggestions. If you have a specific
                question or comment, please feel free to email me directly at &nbsp;
                <Link to="mailto:jograhul143@gmail.com">mail@tharindu.dev</Link>. I make an
                effort to respond to all messages within 24 hours, although it may
                take me longer during busy periods. Alternatively, you can use the
                contact form on my website to get in touch. Simply fill out the
                required fields and I'll get back to you as soon as possible. Finally,
                if you prefer to connect on social media, you can find me on&nbsp;
                <Link
                  to="https://instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://instagram.com/
                </Link>
                . I post regular updates and engage with my followers there, so don't
                hesitate to reach out. Thanks again for your interest, and I look
                forward to hearing from you!
              </p>

              <SocialIcons />

            </div>
          </div>
        </div>



      </div>

    </div>
  )
}

export default Contact
