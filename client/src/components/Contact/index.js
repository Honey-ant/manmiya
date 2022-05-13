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
      <div className="center container ">

        <div className="title card  py-1 my-2  pro rounded ">
          <div className=" titles inContact ">
            <h5 className="my-3 py-3 container darkBrown   ">
                Get In Contact
            </h5>
          </div>
          <form className="  py-2" ref={form} onSubmit={sendEmail}>
            <div className="container px-4">
              <div className="space-between  ">
                <label className="my-2 row titles" htmlFor="firstName">Name:</label>
                <input
                className="my-2 mx-4 row "
                  placeholder="Name"
                  name="from_name"
                  type="firstName"
                  id="firstName"           
                />
                <hr className='pink'></hr>
              </div>
              <div className="space-between  ">
                <label className="my-2 row titles" htmlFor="email">Email:</label>
                <input
                className="my-2  mx-4 row "
                  placeholder="email@email.com"
                  name="reply_to"
                  type="email"
                  id="email"             
                />
                <hr className='pink'></hr>
              </div>

              <div className=" space-between  ">
                <label className="my-2 row titles" htmlFor="email">Message:</label>
                <textarea
                className="my-2 mx-4 row "
                  placeholder="Message"
                  name="message"
                  type="messsage"
                  id="message"
                
                />
                <hr className='pink'></hr>
              </div>
              <div className="flex-row flex-end py-4">
                <button className="  button-74  " type=" submit ">Submit</button>
              </div>
            </div>
          </form>
        </div>
        {/* <hr className="container"></hr> */}
        <div className="container my-3">
         <Link className=" py-4 my-3" to="/">← Go to Main page</Link>
        </div>
    </div>
  );
};

export default Contact;


