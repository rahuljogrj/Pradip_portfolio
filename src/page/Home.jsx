import React from 'react'
import ProjectDetails from '../components/ProjectDetails'
import Skills from '../components/Skills'
import SocialIcons from '../components/SocialIcons'

const Home = () => {
  return (

    <div className="container bg-white">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-7 px-3 py-3">
            <h1 className="h1 fw-bolder">
              Full-stack web and mobile app developer.
            </h1>
            <p>
              As a full-stack web and mobile app developer, I bring a diverse skill set to the table. With a primary focus on backend development, I specialize in Node.js and I specialize in Node.js and have extensive experience in crafting robust, and scalable web applications I am well-versed in various frameworks and technologies, enabling me to build reliable and efficient solutions.
            </p>


            <SocialIcons />


          </div>

          <div className="col-12 col-lg-5 col-md-8 wrapper">
            <img
              src="https://images.unsplash.com/photo-1595617795501-9661aafda72a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFja2VuZCUyMGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
              // src="https://reactfolio.tharindu.dev/homepage.jpg"
              className="img-fluid rounded-pill px-3 py-5"
              alt="..."
            />
          </div>

        </div>


        <ProjectDetails />
        <Skills />


      </div>
    </div>


  )
}

export default Home
