import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className=" my-2 py-2">
    <div className="container">
      <Link to="/signup">← Go to Signup</Link>

      <h2>Login</h2>
      <p>Login to see your order history and to purchase art</p>
    </div>
    <hr className="container w-75"></hr>
      <div className="box py-2 container w-75">
        <form className=" " onSubmit={handleFormSubmit}>

          <div className="flex-row space-between my-2">
            <label className="my-2" htmlFor="email">Email:</label>
            <input
              placeholder="youremail@test.com"
              name="email"
              type="email"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div className="flex-row space-between my-2">
            <label className="my-2" htmlFor="pwd">Password:</label>
            <input
              placeholder="******"
              name="password"
              type="password"
              id="pwd"
              onChange={handleChange}
            />
          </div>
          {error ? (
            <div>
              <p className="error-text">The provided credentials are incorrect</p>
            </div>
          ) : null}
          <div className="flex-row flex-end my-2 py-4">
            <button className="submit" type="submit">Submit</button>
          </div>
        </form>
      </div>
    <hr className="container w-75"></hr> 
    <div className="container ">
      <Link className="my-2 py-2" to="/">← Back to main page</Link>
    </div>  
    </div>
  );
}

export default Login;
