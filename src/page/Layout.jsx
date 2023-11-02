import React from 'react'
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav> */}


      {/* Navbar */}
      <nav className="container-fluid py-2 bg-body-tertiary">


        <ul className="nav justify-content-center text-sm-small">
          <li className="nav-item">
            <Link className="nav-link active" to="/" active>Home</Link>
          </li>
          <li className="nav-item">

            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">

            <Link className="nav-link" to="/projects">Projects</Link>
          </li>
          <li className="nav-item">

            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
        </ul>

      </nav>



      <Outlet />





      {/* Footer */}
      <div className="container my-4 ">
        <hr className="hr" />
        <div className="row">
          <div className="col-lg-6 col-sm-12">

            <ul className="nav justify-content-center text-sm-small">
              <li className="nav-item">
                <Link className="nav-link active" to="/" active>Home</Link>
              </li>
              <li className="nav-item">

                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">

                <Link className="nav-link" to="/projects">Projects</Link>
              </li>
              <li className="nav-item">

                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-6 col-sm-12 text-end">
            <p>© 2023 Rahuljog.dev. All Rights Reserved.</p>
          </div>
        </div>
      </div>


    </div>






  )
}

export default Layout
