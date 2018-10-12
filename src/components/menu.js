import React, { Component } from 'react';
import Header from './header-footer/header';
import Footer from './header-footer/footer';
import MenuItems from './menuItems';

class Menu extends Component {
    render() {
        return(
            <div className="app__parallax">
                <Header />
                <h2 className="parallaxHeader">-Best Sandwiches In Utah Valley</h2>
                <MenuItems />
                <Footer />
            </div>
        )
    }
}
export default Menu;