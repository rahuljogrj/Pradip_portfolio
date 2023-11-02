import React from 'react'
import Skills from '../components/Skills'
import SocialIcons from '../components/SocialIcons'

const About = () => {
  return (



    <div className="container-fluid bg-white">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-7 px-3 py-3">
            <h1 className="fw-bolder">
              I’m Pradip I live in Mumbai, where I design the future.
            </h1>
            <p>
              I've worked on a variety of projects over the years and I'm proud of the progress I've made. Many of these projects are open-source and available for others to explore and contribute to. If you're interested in any of the projects I've worked on, please feel free to check out the code and suggest any improvements or enhancements you might have in mind. Collaborating with others is a great way to learn and grow, and I'm always open to new ideas and feedback.
            </p>

            <SocialIcons />


          </div>


          {/* <div className="col-1 d-none d-sm-block" /> */}
          <div className="col-12 col-lg-5 wrapper">
            <img
              src="https://reactfolio.tharindu.dev/about.jpg"
              className="rounded-pill img-fluid  px-3 py-5"
              alt="..."
            />
          </div>
        </div>
      </div>


      <Skills />

    </div>




  )
}

export default About
