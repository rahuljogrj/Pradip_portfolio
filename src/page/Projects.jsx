import React from 'react'
import ProjectDetails from '../components/ProjectDetails'
import SocialIcons from '../components/SocialIcons'


const Projects = () => {
    return (
        <div>
            <div className="container bg-white">

                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-9 px-3 py-3">
                            <h1 className="fw-bolder">
                                Things I’ve made trying to put my dent in the universe.
                            </h1>
                            <p>
                                I've worked on a variety of projects over the years and I'm proud of
                                the progress I've made. Many of these projects are open-source and
                                available for others to explore and contribute to. If you're
                                interested in any of the projects I've worked on, please feel free to
                                check out the code and suggest any improvements or enhancements you
                                might have in mind. Collaborating with others is a great way to learn
                                and grow, and I'm always open to new ideas and feedback.
                            </p>

                            <SocialIcons />


                        </div>
                    </div>
                </div>

                <ProjectDetails />

            </div>

        </div>
    )
}

export default Projects