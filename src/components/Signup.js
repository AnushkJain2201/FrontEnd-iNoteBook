import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles.css';


const Signup = (props) => {

  const host = 'http://localhost:5000';

  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });

  let navigate = useNavigate();

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${host}/api/auth/createuser`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      //Save the authtoken and redirect 
      localStorage.setItem('token', json.authtoken)
      navigate('/login');
      props.showAlert("Account Created" , "success");

    }
    else {
      props.showAlert("Invalid Credentials" , "danger");
    }

  }

  return (
    <div className='container bg-gray-100 bg-midnight text-tahiti p-4 border-8 w-9/12 '>
      <div className=' my-10 text-3xl font-bold'>SignUp To Continue In iNoteBook</div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" aria-describedby="emailHelp" name='name' onChange={onChange} required minLength={5} />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" aria-describedby="emailHelp" name='email' onChange={onChange} required minLength={5} />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" name='password' onChange={onChange} required minLength={5} />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">Confirm Password</label>
          <input type="cpassword" className="form-control" id="cpassword" name='cpassword' onChange={onChange} required minLength={5} />
        </div>

        <button type="submit" className=" mt-3 border border-blue-500  bg-blue-500 text-white py-2 px-4 rounded">Submit</button>
      </form>
    </div>
  )
}

export default Signup
