import React, { Component } from 'react';
import Header from './header-footer/header';
import Footer from './header-footer/footer';
import ContactMessage from './contactMessage';
import Map from './map';

class Contact extends Component {
    render() {
        return(
            <div>
                <Header/>
                <div className="gridContact">
                <Map className="imgmap" location="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194665.11702719072!2d-111.91840885223054!3d40.32809211241413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x874d975494ad288d%3A0xe55b532ce8a0eee4!2sSensuous+Sandwich!5e0!3m2!1sen!2sus!4v1539376979408"/>
                <ContactMessage street="1680 State St #104" cityState="Orem, UT, 84097"phoneNumber="(801) 225-9475" hours="10:30 AM - 8PM"/>
                <ContactMessage street="163 W Center St" cityState="Provo UT 84601" phoneNumber="(801) 377-9244" hours="10:30 AM - 8PM"/>
                <Map className="imgmap" location="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d75568.226598349!2d-111.73947403033411!3d40.257610683412146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc1e6346e076c8724!2sSensuous+Sandwich!5e0!3m2!1sen!2sus!4v1539377496989"/>
                </div>                
                <Footer/>
                
            </div>
        )
    }
}
export default Contact;