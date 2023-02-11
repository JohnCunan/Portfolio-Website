import '../styles/Connect.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Connect() {

    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_gjjvni8', 'template_2xal5ua', form.current, 'HGl6qsDZH-bh_lr82')
        .then((result) => {
            console.log(result.text);
            alert("Your message was successfully sent!");
        }, (error) => {
            console.log(error.text);
            alert("Error in sending your message");
        });
    };

    return(
        <div className='ConnectSectionContainer'>
            <h2>Connect with me</h2>
            <div className='MessageContainer'>
                <h3>Feel free to send me a message</h3>
                <form ref={form} onSubmit={sendEmail} className='EmailForm'>
                    <label>Name</label>
                    <input type="text" name="user_name" placeholder='Enter your name (optional)'/>
                    <label>Message</label>
                    <textarea name="message" placeholder="Enter your message here..." />
                    <input type="submit" value="SEND" />
                </form>
            </div>
        </div>
    )
}