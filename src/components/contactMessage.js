import React, { Component } from 'react';

class ContactMessage extends Component {
    constructor(props) {
        super()
        
    }

    render() {
        return (
            <div className="page-container">
                <div className="contact-grid-wrapper">
                    <div className="company-metadata-sidebar-wrapper">
                            <img className="contactImage"src="/assets/images/Logo.png" alt="logo" />
                        <div className="company-details-wrapper">
                            <i className="fas fa-location-arrow"></i>

                            <div>{this.props.street}</div>
                            <div>{this.props.cityState}</div>

                            <div className="company-details-wrapper">
                                <i className="fas fa-mobile"></i>

                                <div>{this.props.phoneNumber}</div>

                            </div>
                            <div className="company-details-wrapper">
                                <i className="fas fa-clock"></i>
                                <div>{this.props.hours}</div>
                            </div>
                        </div>


                        <div className="form">

                            <div className="form-group">
                                <input type="text" id="fullName" placeholder="Your Name" />
                                <label className="fullName">Your Name</label>
                            </div>

                            <div className="form-group">
                                <input type="email" id="yourEmail" placeholder="Your Email" />
                                <label className="yourEmail">Your Email</label>
                            </div>

                            <div className="form-group">
                                <textarea name="message" id="message" placeholder="Message"></textarea>
                                <label className="message">Message</label>
                            </div>
                        </div>

                        <div className="centered-btn-wrapper">
                            <button type="submit" className="btn">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ContactMessage;