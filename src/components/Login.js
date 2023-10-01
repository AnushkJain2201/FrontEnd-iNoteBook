import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles.css';



const Login = (props) => {
    const host = 'http://localhost:5000';

    const [credentials, setCredentials] = useState({ email: "", password: "" });

    let navigate = useNavigate()

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`${host}/api/auth/login`, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password }),
        });
        const json = await response.json();
        console.log(json);
        if (json.success === true) {
            //Save the authtoken and redirect 
            localStorage.setItem('token', json.authtoken)
            navigate('/');
            props.showAlert("Login Successfully" , "success");
        }
        else {
            props.showAlert("Invalid Credentials" , "danger");
        }
    }
    return (
        
        <div className='container bg-gray-100 mt-10 bg-midnight text-tahiti p-4 border-8 w-9/12 ' >
            <div className=' my-10 text-3xl font-bold'>Login To Continue In iNoteBook</div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" onChange={onChange} value={credentials.email} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3 border-double">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name='password' onChange={onChange} value={credentials.password} />
                </div>
                <button type="submit" class=" mt-8 border border-blue-500  bg-blue-500 text-white py-2 px-4 rounded">Submit</button>

            </form>
        </div>
    )
}

export default Login
