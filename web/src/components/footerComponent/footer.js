import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Information from "../pages/information";
import Activities from "../pages/activities";
import logo from "../../Assets/images/logo/black.jpeg";

class Footer extends Component {
    render() {
        return (

            < footer >
                <div className="footerContent1">

                    <nav>
                    <ul>
                    <li className="first">
                        <a href="http://www.richmond.edu">University of Richmond</a>
                        \n 28 Westhampton Way \n Richmond, VA 23173
                        \n <small>URCSSA 2016-2019</small>
                    </li>
                    <li>
                        Follow Us
                        //<img id="qrcode" src="devResources/qrCode.jpg" alt="qrcode" height="110"/>
                    </li>
                    <li>
                        Contact Us
                        //<a href="mailto:cssa@richmond.edu"><img class="emailIcon" src="devResources/emailIcon.png" alt="email" height="25"/> </a>
                    </li>
                    <li className="last">
                        Disclaimer
                        //<a href="disclaimer.html">View disclaimer</a>
                    </li>
                    </ul>
                    </nav>
                </div>




            < /footer>
    )
        ;
    }

}

export default Footer;
