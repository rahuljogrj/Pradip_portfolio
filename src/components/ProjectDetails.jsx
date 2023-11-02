import React from 'react'
import { Link } from "react-router-dom";

const ProjectDetails = () => {
    return (
        <div>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 mx-2">
                    <div className="viewproject card border-0 p-3">
                        <img
                            width={48}
                            height={48}
                            // src="https://img.icons8.com/color/48/python--v1.png"
                            src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-hackathon-ux-and-ui-flaticons-flat-flat-icons.png"
                            alt="python--v1"
                        />
                        <div className="card-body">
                            <h5 className=" card-title fw-bold">Hackaton</h5>
                            <p className="card-text">
                                Hackathon-I built a dynamic and responsive Hackathon website using React for the frontend and Firebase as the database, showcasing my proficiency in modern web development technologies.
                            </p>
                            <Link to="https://vcet-hackathon.web.app/" target="_blank">
                                <i className="fa fa-link mx-2 me-2" style={{ color: "#3b5998" }} />
                                View Projects
                            </Link>
                        </div>
                    </div>
                    <div className="viewproject card border-0 p-3">
                        <img
                            width={48}
                            height={48}
                            src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-dashboard-mobile-app-development-flaticons-lineal-color-flat-icons-3.png"
                            alt="external-HTML-web-development-goofy-color-kerismaker"
                        />
                        <div className="card-body">
                            <h5 className=" card-title fw-bold">Dashboard</h5>
                            <p className="card-text">
                                Developed a survey data dashboard using PHP backend, MySQL database, and HTML/CSS frontend. Collected data from website forms to provide insightful visualizations and analytics
                            </p>
                            <Link to="https://ypptechnologies.in/MHD/dashboard.php" target="_blank">
                                <i className="fa fa-link mx-2 me-2" style={{ color: "#3b5998" }} />
                                View Projects
                            </Link>
                        </div>
                    </div>
                    <div className="viewproject card border-0 p-3">
                        <img
                            width={80}
                            height={40}
                            // src="https://img.icons8.com/color/48/javascript--v1.png"
                            src="src\assets\Images\find-my-notes.png"
                            alt="javascript--v1"
                        />
                        <div className="card-body">
                            <h5 className=" card-title fw-bold">Find My Notes</h5>
                            <p className="card-text">
                                Collaborated on 'Find My Notes,' a Django-powered web app with MySQL database, enabling note sharing. Integrated Google Drive for efficient storage, enhancing user experience.
                            </p>
                            <Link to="https://findmynotes.pythonanywhere.com/searchPage?search_query=question%20paper%20sem%206" target="_blank">
                                <i className="fa fa-link mx-2 me-2" style={{ color: "#3b5998" }} />
                                View Projects
                            </Link>
                        </div>
                    </div>
                    <div className="viewproject card border-0 p-3">
                        <img
                            width={120}
                            height={40}
                            src="https://www.giftanaindia.com/wp-content/uploads/elementor/thumbs/Giftana-R-Logo-1-q4dm3ekpymfwhy27cqetkd65dax2d0kt803xiewog2.png"
                            alt="react"
                        />
                        <div className="card-body">
                            <h5 className=" card-title fw-bold">Giftana</h5>
                            <p className="card-text">
                                Led the collaborative development of 'Gifatana,' an E-commerce website using the MERN stack. Served as the backend developer, overseeing the project's implementation and ensuring seamless integration across the platform.
                            </p>
                            <Link to="https://github.com/pradip8928/Giftana.git" target="_blank">
                                <i className="fa fa-link mx-2 me-2" style={{ color: "#3b5998" }} />
                                View Projects
                            </Link>
                        </div>
                    </div>

                </div>
            </div>


            

        </div>
    )
}

export default ProjectDetails