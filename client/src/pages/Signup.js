import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';
import Swal from 'sweetalert2';

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try{
      const mutationResponse = await addUser({
        variables: {
          email: formState.email,
          password: formState.password,
          firstName: formState.firstName,
          lastName: formState.lastName,
        } 

    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
    console.log();
    Swal.fire({
      icon: 'success',
      title: 'Sign up successful 😊'
    })
    } catch (error) {
      console.error('Sigup form Submit error');
      Swal.fire({
        icon: 'error',
        title: 'Ooops, something went wrong 😞'
      })
    }
    // target.reset()
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className=" my-3">
      <div className="container">
      


      <hr className="container"></hr>
      <div className='title card '>
        <div className=" py-2 container inContact darkBrown">
              <h2 className='darkBrown'>Signup</h2>
          <p>Sign up to buy and to see order history </p>
          <p>(It's easy don't worry)</p>
        </div> 
          <form className=" container px-4 py-4" onSubmit={handleFormSubmit}>
            <div className='container px-4'>
              <div className=" space-between my-2 ">
                <label className="my-2 row titles" htmlFor="firstName">First Name:</label>
                <input
                className="my-2 mx-4 row "
                  placeholder="First"
                  name="firstName"
                  type="firstName"
                  id="firstName"
                  onChange={handleChange}
                />
                <hr className='pink'></hr>
              </div>
              <div className="space-between my-2 ">
                <label className="my- row titles" htmlFor="lastName">Last Name:</label>
                <input
                className="my-2 mx-4 row "
                  placeholder="Last"
                  name="lastName"
                  type="lastName"
                  id="lastName"
                  onChange={handleChange}
                />
                <hr className='pink'></hr>
              </div>
              <div className=" space-between my-2 ">
                <label className="my-2 row titles" htmlFor="email">Email:</label>
                <input
                className="my-2 mx-4 row "
                  placeholder="youremail@email.com"
                  name="email"
                  type="email"
                  id="email"
                  onChange={handleChange}
                />
                <hr className='pink'></hr>
              </div>
              <div className="space-between my-2 ">
                <label className="my- row titles" htmlFor="pwd">Password:</label>
                <input
                className="my-2 mx-4 row "
                  placeholder="******"
                  name="password"
                  type="password"
                  id="pwd"
                  onChange={handleChange}
                />
                <hr className='pink'></hr>
              </div>
              <div className="flex-row flex-end py-4">
                <button className="submit button-74" type="submit">Submit</button>
              </div>
            </div>
          </form>
      </div>
      <hr className="container"></hr>
      </div>
        <div className="container">
          <Link className="my-2 " to="/login">← Go to Login</Link>
        </div>
    </div>
  );
}

export default Signup;
