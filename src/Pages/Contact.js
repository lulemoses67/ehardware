import React from 'react';
import { useState } from 'react';
import Page from '../partials/Page';
import Section from "../partials/Section";

const Contact = () => {

  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    message: ''
});

const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = (e) => {
    e.preventDefault();
    
    // Your phone number in international format (e.g., 1234567890)
    const phoneNumber = "256756150066"; 
    
    // Create the encoded message
    const text = `*New Inquiry*%0A*Name:* ${formData.fullname}%0A*Email:* ${formData.email}%0A*Message:* ${formData.message}`;
    
    // Open WhatsApp in a new tab
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
    // Reset the form values here
    setFormData({
      fullname: '',
      email: '',
      message: ''
  });
};

    return (
        <>
          <Page title={'Get in touch'} info={'Contact us for any inqury or help'} >
            <Section>
              <div className="row">
                <div className="col-12 col-lg-5">
                  <h2>Drop your message</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-element">
                            <label htmlFor="fullname">Full name</label>
                            <input type="text" name="fullname" id="fullname" onChange={handleChange} value={formData.fullname} placeholder="Full name" required />
                        </div>
                        <div className="form-element">
                            <label htmlFor="email">Email or Phone number</label>
                            <input type="string" name="email" id="email" onChange={handleChange} value={formData.email} placeholder="25673456789 or example@gmail.com" required />
                        </div>
                        <div className="form-element">
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" onChange={handleChange} value={formData.message} cols="30" rows="10" placeholder="Your message" required></textarea>
                        </div>
                        <div className="btn-group-rt">
                            <button type="submit" className="btn-outline"><i className="fa fa-angles-right"></i> Send</button>
                        </div>
                    </form>
                </div>
                <div className="col-7">
                  <h2>Our Map</h2>
                </div>
              </div>
            </Section>
          </Page>   
        </>
    );
}

export default Contact;
