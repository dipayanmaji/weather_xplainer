import React from "react";
import './Footer.scss';

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer'>
                <div className='copyright'>
                    Weather Xplainer © 2023<br />
                    created by <a href='https://www.linkedin.com/in/dipayanmaji/' target='_blank' id='creator'>dipayan</a>
                </div>

                <span className="divider"></span>

                <div className='social-media'>
                    <a href='https://www.linkedin.com/in/dipayanmaji/' target='_blank'><i className="fa-brands fa-linkedin-in"></i></a>
                    <a href='https://github.com/dipayanmaji' target='_blank'><i className="fa-brands fa-github"></i></a>
                    <a href='https://twitter.com/dipayanmaji11' target='_blank'><i className="fa-brands fa-x-twitter"></i></a>
                    <a href='https://www.instagram.com/dipayan.maji/' target='_blank'><i className="fa-brands fa-instagram"></i></a>
                    <a href='https://www.facebook.com/dip.ayan.716' target='_blank'><i className="fa-brands fa-facebook-f"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Footer;