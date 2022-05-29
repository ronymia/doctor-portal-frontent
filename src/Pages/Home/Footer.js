import React from 'react';
import { Link } from "react-router-dom";
import footer from '../../assets/images/footer.png';

const Footer = () => {
    return (

        <footer style={{
            background: `url(${footer})`,
            backgroundSize: "cover"
        }}>
            <div className="footer p-10">
                <div>
                    <span className="footer-title">Services</span>
                    <Link to='/ssc' className="link link-hover">Branding</Link>
                    <Link to='/ssc' className="link link-hover">Design</Link>
                    <Link to='/ssc' className="link link-hover">Marketing</Link>
                    <Link to='/ssc' className="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link to='/ssc' className="link link-hover">About us</Link>
                    <Link to='/ssc' className="link link-hover">Contact</Link>
                    <Link to='/ssc' className="link link-hover">Jobs</Link>
                    <Link to='/ssc' className="link link-hover">Press kit</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link to='/ssc' className="link link-hover">Terms of use</Link>
                    <Link to='/ssc' className="link link-hover">Privacy policy</Link>
                    <Link to='/ssc' className="link link-hover">Cookie policy</Link>
                </div>
            </div>
            <footer className="footer footer-center p-4">
                <div>
                    <p>Copyright © 2022 - All right reserved by The Dentist Portal</p>
                </div>
            </footer>
        </footer>

    );
};
export default Footer;