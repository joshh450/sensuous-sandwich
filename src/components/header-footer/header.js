import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return(
            <div className="header">
                <div className="header__leftColumn">
                        <img className="logo" src="/assets/images/Logo.png" />
                </div>

                
                <div className="header__rightColumn">
                        <div className="header__nav-link">
                            <Link className='link__header' to="/">Home</Link>
                        </div>
                        <div className="header__nav-link">
                            <Link className='link__header' to="/menu">Menu</Link>
                        </div>
                        <div className="header__nav-link">
                            <Link className='link__header' to="/contact">Contact</Link>
                        </div>
                </div>
            </div>
        )
    }
}
export default Header;