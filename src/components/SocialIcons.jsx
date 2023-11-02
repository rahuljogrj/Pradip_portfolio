import React from 'react'
import { Link } from "react-router-dom";

const SocialIcons = () => {
    return (

        <div className="container-fluid social-icons">
            <Link  to="">
                <i className="fa fa-facebook fa-2x mx-2" />
            </Link>
            <Link to="">
                <i className="fa fa-instagram fa-2x mx-2" />
            </Link>
            <Link to="">
                <i className="fa fa-linkedin fa-2x mx-2" />
            </Link>
            <Link to="">
                <i className="fa fa-twitter fa-2x mx-2" />
            </Link>
            <Link to="">
                <i className="fa fa-google fa-2x mx-2" />
            </Link>
        </div>

    )
}

export default SocialIcons