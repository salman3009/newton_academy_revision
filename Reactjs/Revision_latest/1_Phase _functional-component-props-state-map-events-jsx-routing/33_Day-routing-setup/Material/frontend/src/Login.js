import {useState} from 'react';
import {useNavigate} from "react-router-dom"
import axios from 'axios';


const Login = () => {

    const navigate = useNavigate();
  

  

    const onSubmitHandler=()=>{
            navigate('/dashboard');
    }

    return (<div className="container">
        <div className="col-md-4"></div>
        <div className="col-md-4">
            <form>
                
                <div class="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control"  id="email" name="email" placeholder="Enter email" />
                </div>
                <div class="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control"  id="password" name="password" placeholder="Password" />
                </div>
                <button onClick={onSubmitHandler} type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        <div className="col-md-4"></div>
    </div>)
}
export default Login;