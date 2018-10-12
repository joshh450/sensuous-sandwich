import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
           
                <div className="footer">
                    <div className="footer__logo">
                            <img src="/assets/images/Logo.png" alt="Logo" />
                    </div>


                    <div className="footer__links">
                        
                            <Link to="/">Home</Link>
                            <Link to="/menu">Menu</Link>
                            <Link to="/contact">Contact</Link>
                       
                    </div>
              
                    <div className="footer__social">
                        <i className="footer__social__icon fab fa-instagram"></i>
                        <i className="footer__social__icon fab fa-facebook"></i>
                        <i className="footer__social__icon fab fa-twitter"></i>
                    </div>
               
                </div>
     
        )
    }
}
export default Footer;