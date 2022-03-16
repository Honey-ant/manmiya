import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

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
      <div className=" my-3">

        <h4 className="py-2 container">
          Please Fill Out The Form Below To Get In Contact
        </h4>
     
        <hr className="container"></hr>
        <div className="box py-2 container">
          <form className="form container " ref={form} onSubmit={sendEmail}>
          <div className="flex-row space-between my-2 py-2 ">
            <label className="my-2" htmlFor="firstName">Name:</label>
            <input
              placeholder=" Your Name"
              name="from_name"
              type="firstName"
              id="firstName"
              
            />
          </div>
          <div className="flex-row space-between my-2 py-2 ">
            <label className="my-2" htmlFor="email">Email:</label>
            <input
              placeholder="youremail@email.com"
              name="reply_to"
              type="email"
              id="email"
              
            />
          </div>

          <div className="flex-row space-between my-2 py-2 ">
            <label className="my-2" htmlFor="email">Message:</label>
            <textarea
              placeholder="Your message"
              name="message"
              type="messsage"
              id="message"
            
            />
          </div>
          <div className="flex-row flex-end py-4">
            <button type="submit pink">Submit</button>
          </div>
          </form>
        </div>
        <hr className="container"></hr>
        <div className="container my-3">
        <Link className=" py-4 my-3" to="/">← Go to Main page</Link>
        </div>
    </div>
  );
};

export default Contact;


