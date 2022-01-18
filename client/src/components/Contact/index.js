import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
// import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

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
      <div className="container">
        <h4 className="py-2" >Please Fill Out The Form Below</h4>

        <form className="form py-2" ref={form} onSubmit={sendEmail}>
        <ul className="form">
            <li>
                <label>Name</label>
            </li>
            <li>
             <input label='Name' type="text" name="from_name" />   
            </li>
            <li>
               <label>Email</label>  
            </li>
            <li>
               <input label='Email' type="email" name="reply_to" /> 
            </li>
            <li>
               <label>Message</label> 
            </li>
            <li>
               <textarea label='Message' name="message" /> 
            </li>
            
            <input className="button" type="submit" value="Send" />
        </ul>
        </form>
    </div>
  );
};

export default Contact;


