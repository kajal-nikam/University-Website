import React from "react";
import "./Contact.css";
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "ec2d0c47-44b0-4bdc-9710-68fe17911031");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();

      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Send Us a Message <img src={msg_icon} alt="" /></h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. You feedback , questions and suggestions are
          important to us we strive to provide exceptional service to our
          university community
        </p>
     
      <ul>
        <li> <img src={mail_icon} alt="" /> contact@gmail.com</li>
        <li> <img src={phone_icon} alt="" /> +67565645</li>
        <li> <img src={location_icon} alt="" /> dummy Addresss,Nsk, <br />INDIA</li>
      </ul> 
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit} >
         <label>
           Your Name:
         </label>
         <input type="text" name="name" placeholder="Enter Your Name" required/>
         <label >Phone Number</label>
         <input type="text" name="phone " id="" placeholder="Enter Your Phone Number"required/>
         <label> Write Your Message Here</label>
         <textarea name="message"  rows="6" placeholder="Enter Your Message" required></textarea>
         <button type="submit" className="btn dark-btn">Submit Now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
