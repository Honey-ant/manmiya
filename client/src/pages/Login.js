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
    <div className=" my-2 py-2 container">
      <Link to="/signup">← Go to Signup</Link>

    <hr className="container "></hr>
      <div className="  card title ">
          <div className="container inContact py-2">
            <div className="darkBrown">
              <h2 className="darkBrown">Login</h2>
              <p className="darkBrown">Login to see your order history and to purchase art</p>
            </div>
         </div>
        <form className="  container" onSubmit={handleFormSubmit}>
          <div className="container">
            <div className=" space-between my-2">
              <label className="my-2 row" htmlFor="email">Email:</label>
              <input
              className="my-2 mx-4 row "
                placeholder="youremail@test.com"
                name="email"
                type="email"
                id="email"
                onChange={handleChange}
              />
              <hr className='pink'></hr>
            </div>
            <div className=" space-between my-2">
              <label className="my-2 row" htmlFor="pwd">Password:</label>
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
