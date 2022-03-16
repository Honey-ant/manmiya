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
      

      <h2>Signup</h2>
        <p>Sign up to buy and to see order history </p>
        <p>(It's easy don't worry)</p>
      </div>
      <hr className="container"></hr>
      <div className="box py-2 container">
        <form className="form container" onSubmit={handleFormSubmit}>
          <div className="flex-row space-between my-2 input">
            <label className="my-2" htmlFor="firstName">First Name:</label>
            <input
              placeholder="First"
              name="firstName"
              type="firstName"
              id="firstName"
              onChange={handleChange}
            />
          </div>
          <div className="flex-row space-between my-2 input">
            <label className="my-" htmlFor="lastName">Last Name:</label>
            <input
              placeholder="Last"
              name="lastName"
              type="lastName"
              id="lastName"
              onChange={handleChange}
            />
          </div>
          <div className="flex-row space-between my-2 input">
            <label className="my-2" htmlFor="email">Email:</label>
            <input
              placeholder="youremail@email.com"
              name="email"
              type="email"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div className="flex-row space-between my-2 input">
            <label className="my-2" htmlFor="pwd">Password:</label>
            <input
              placeholder="******"
              name="password"
              type="password"
              id="pwd"
              onChange={handleChange}
            />
          </div>
          <div className="flex-row flex-end py-4">
            <button className="submit" type="submit">Submit</button>
          </div>
        </form>
      </div>
      <hr className="container"></hr>
        <div className="container">
          <Link className="my-2 " to="/login">← Go to Login</Link>
        </div>
    </div>
  );
}

export default Signup;
