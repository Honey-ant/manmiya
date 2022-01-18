import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

const SERVICE_ID = "service_nkazh0j";
const TEMPLATE_ID = "template_8cxz3se";
const USER_ID = "user_zAutm7UYCBSXMkVu3IaOs";

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:3000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully'
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
      });
    e.target.reset()
  };

  return (
    <>
    <div className="container ">
            <div className="cards row">

                <h3>Contact me here</h3>
                <br />
                <p className="margins">
                  Fill out the form below for any questions
                  
                </p>

                
                    <div className="form text-left my-2">
                        <Form onSubmit={handleOnSubmit}>
                            <div className="flex-row space-between my-2">
                              <Form.Field
                              // className="flex-row space-between my-2"
                                  id='form-input-control-email'
                                  control={Input}
                                  label='Email'
                                  name='reply_to'
                                  placeholder='Email…'
                                  required
                                  icon='mail'
                                  iconPosition='left'
                              />
                            </div>  
                            <div className="flex-row space-between my-2">
                            <Form.Field
                            // className="flex-row space-between my-2"
                                id='form-input-control-last-name'
                                control={Input}
                                label='Name'
                                name='from_name'
                                placeholder='Name…'
                                required
                                icon='user circle'
                                iconPosition='left'
                            />
                            </div>
                            <div className="flex-row space-between my-2">
                            <Form.Field
                              className="flex-row space-between my-2"
                                id='form-textarea-control-opinion'
                                control={TextArea}
                                label='Message'
                                name='message'
                                placeholder='Message…'
                                required
                            />
                           </div> 
                            <Button className="submit btn" type='submit' color='green'>Submit</Button>
                        </Form>
                    </div>
                    <Link className="my-2 py-2" to="/">← Back to main page</Link>
                    
            </div>
        </div>
    </>
  );
};

export default ContactForm;
