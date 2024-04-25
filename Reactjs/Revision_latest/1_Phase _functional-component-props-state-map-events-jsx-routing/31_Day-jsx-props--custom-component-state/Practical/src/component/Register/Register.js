import {useState} from 'react';

function Register(){

    let input = "no data";
    const [getName,setName] = useState('no data state');
    
    const onSubmitHandler=(en)=>{
        en.preventDefault();
        console.log(input);
        alert("onsubmit");
        setName(input);
    }

    const onChangeHandle=(event)=>{
        console.log(event.target.name,event.target.value);
        input = event.target.value;
    }
   
   
    return (<div>
        {2+1}
       <form>
  <div className="form-group">
    <label>User Name</label>
    <input type="text" className="form-control" name="username" onChange={onChangeHandle}/>
  </div>
  <button onClick={onSubmitHandler} type="submit" className="btn btn-primary">Submit</button>
</form>
  <h1 style={{color:'red',textAlign:"center",backgroundColor:'green'}}>{getName}</h1>
    </div>)
}
export default Register;