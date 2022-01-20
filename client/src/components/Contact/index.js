import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
// import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
// const SERVICE_ID = "service_cnd6lhl";
// const TEMPLATE_ID = "template_eciz0ih";
// const USER_ID = "user_VPTKvbreLmR9zNrZrSQ86";

export const Contact = () => {
  const form = useRef();
 
  const sendEmail = (e) => {
    
    e.preventDefault();

    emailjs.sendForm( 
      "service_cnd6lhl", 
      "template_eciz0ih", 
      form.current, 
      "user_VPTKvbreLmR9zNrZrSQ86")
      .then((result) => {
          console.log('SUCCESS', result.text);
          Swal.fire({
            icon: 'success',
            title: 'Message Sent To Manmiya 😊'
          })
      }, (error) => {
          console.log('Somthing went wrong', error.text);
          Swal.fire({
            icon: 'error',
            title: 'Ooops, something went wrong 😞',
            text: error.text,
          })
      });
      e.target.reset()
  };

  return (
      <div className="container my-1">
        <Link to="/">← Go to Main page</Link>
        <h4 className="py-2 " >Please Fill Out The Form Below To Get In Contact</h4>

        <form className="form py-2" ref={form} onSubmit={sendEmail}>
        <div className="flex-row space-between my-2">
          <label htmlFor="firstName">Name:</label>
          <input
            placeholder="Name"
            name="from_name"
            type="firstName"
            id="firstName"
            // onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="email">Email:</label>
          <input
            placeholder="youremail@test.com"
            name="reply_to"
            type="email"
            id="email"
            // onChange={handleChange}
          />
        </div>

        <div className="flex-row space-between my-2">
          <label htmlFor="email">Message:</label>
          <textarea
            placeholder="write your message here"
            name="message"
            type="messsage"
            id="message"
            // onChange={handleChange}
          />
        </div>
        <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
        </form>

    </div>
  );
};

export default Contact;


