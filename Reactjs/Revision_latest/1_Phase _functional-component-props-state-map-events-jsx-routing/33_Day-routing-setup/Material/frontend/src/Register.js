import {useNavigate} from "react-router-dom"

const Register = () => {

    const navigate = useNavigate();
   

    

    const onSubmitHandler=()=>{
            navigate('login');
    }

    return (<div className="container">
        <div className="col-md-4"></div>
        <div className="col-md-4">
            <form>
                <div class="form-group">
                    <label htmlFor="userName">UserName</label>
                    <input type="text" className="form-control"  id="userName" name="userName" placeholder="Enter userName" />
                </div>
                <div class="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" placeholder="Enter email" />
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
export default Register;