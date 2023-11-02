import React from 'react'

const Skills = () => {
    return (
        <>
            {/* ======= Skills Section ======= */}
            <section className="container my-4 p-3 bg-light">

                <div className="section-title text-start">
                    <h2>Skills </h2>
                </div>


                <div className="row">
                    <div
                        className="col-lg-6 d-flex align-items-center"
                        data-aos="fade-right"
                        data-aos-delay={100}
                    >
                        {/* <img src="assets/img/skills.png" class="img-fluid" alt=""> */}
                        <img
                            src="https://images.unsplash.com/photo-1595617795501-9661aafda72a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFja2VuZCUyMGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
                            className="img-fluid"
                            alt=""
                        />
                    </div>


                    <div
                        className="col-lg-6 pt-4 pt-lg-0 content"
                        data-aos="fade-left"
                        data-aos-delay={100}>

                        <h4>Technology </h4>
                        <p className="fst-italic">
                            During my internship and project development, I successfully
                            utilized the following technologies.
                        </p>


                        <div className="skills-content">
                            <div className="conatiner my-2">
                                <h6 className="skill">
                                    HTML <i className="val">100%</i>
                                </h6>
                                <div className="progress">
                                    <div
                                        className="progress-bar"
                                        role="progressbar"
                                        aria-label="Example with label"
                                        style={{ width: "100%" }}
                                        aria-valuenow={100}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    >
                                        HTML 75%
                                    </div>
                                </div>
                            </div>



                            <div className="conatiner my-2">
                                <h6 className="skill">
                                    CSS <i className="val">100%</i>
                                </h6>
                                <div className="progress">
                                    <div
                                        className="progress-bar bg-success"
                                        role="progressbar"
                                        aria-label="Example with label"
                                        style={{ width: "100%" }}
                                        aria-valuenow={100}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    >
                                        CSS 75%
                                    </div>
                                </div>
                            </div>


                            <div className="conatiner my-2">
                                <h6 className="skill">
                                    Javascript <i className="val">75%</i>
                                </h6>
                                <div className="progress">
                                    <div
                                        className="progress-bar bg-info"
                                        role="progressbar"
                                        aria-label="Example with label"
                                        style={{ width: "75%" }}
                                        aria-valuenow={75}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    >
                                        Javascript 75%
                                    </div>
                                </div>
                            </div>


                            <div className="conatiner my-2">
                                <h6 className="skill">
                                    React <i className="val">55%</i>
                                </h6>
                                <div className="progress">
                                    <div
                                        className="progress-bar bg-warning"
                                        role="progressbar"
                                        aria-label="Example with label"
                                        style={{ width: "55%" }}
                                        aria-valuenow={55}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    >
                                        React 55%
                                    </div>
                                </div>
                            </div>


                            <div className="conatiner my-2">
                                <h6 className="skill">
                                    Node JS <i className="val">65%</i>
                                </h6>
                                <div className="progress">
                                    <div
                                        className="progress-bar bg-danger"
                                        role="progressbar"
                                        aria-label="Example with label"
                                        style={{ width: "65%" }}
                                        aria-valuenow={65}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    >
                                        Node JS 65%
                                    </div>
                                </div>
                            </div>


                            <div className="conatiner my-2">
                                <h6 className="skill">
                                    Express JS <i className="val">75%</i>
                                </h6>
                                <div className="progress">
                                    <div
                                        className="progress-bar bg-success"
                                        role="progressbar"
                                        aria-label="Example with label"
                                        style={{ width: "75%" }}
                                        aria-valuenow={75}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    >
                                        Express JS 75%
                                    </div>
                                </div>
                            </div>


                            <div className="conatiner my-2">
                                <h6 className="skill">
                                    PHP <i className="val">45%</i>
                                </h6>
                                <div className="progress">
                                    <div
                                        className="progress-bar bg-info"
                                        role="progressbar"
                                        aria-label="Example with label"
                                        style={{ width: "45%" }}
                                        aria-valuenow={45}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    >
                                        PHP 45%
                                    </div>
                                </div>
                            </div>


                            <div className="conatiner my-2">
                                <h6 className="skill">
                                    MongoDB <i className="val">85%</i>
                                </h6>
                                <div className="progress">
                                    <div
                                        className="progress-bar"
                                        role="progressbar"
                                        aria-label="Example with label"
                                        style={{ width: "85%" }}
                                        aria-valuenow={85}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    >
                                        MongoDB 85%
                                    </div>
                                </div>
                            </div>


                            <div className="conatiner my-2">
                                <h6 className="skill">
                                    MySQL <i className="val">90%</i>
                                </h6>
                                <div className="progress">
                                    <div
                                        className="progress-bar bg-warning"
                                        role="progressbar"
                                        aria-label="Example with label"
                                        style={{ width: "90%" }}
                                        aria-valuenow={90}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    >
                                        MySql 90%
                                    </div>
                                </div>
                            </div>



                        </div>

                    </div>


                    
                </div>
            </section>
            {/* End Skills Section */}

        </>
    )
}

export default Skills