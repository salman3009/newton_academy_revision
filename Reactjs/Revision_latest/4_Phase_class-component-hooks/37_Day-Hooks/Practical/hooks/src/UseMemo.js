import { useState ,useMemo} from "react";

function UseMemo(props){

    const[getCount,setCount]=useState(10);

    const[getAge,setAge]=useState(0);

    const expensiveCalculation = () => {
        let num=0;
        for (let i = 0; i < getCount; i++) {
          num += 1;
          console.log("Calculating...",i);
        }
        if(getCount%2==0){
            return true;
        }
        else{
            return false;
        }
      };


    //const Even = expensiveCalculation();
    const Even = useMemo(() => expensiveCalculation(), [getCount]);

    const incrementHandler=()=>{
        setCount(getCount+1)
    }

    const  ageHandler=()=>{
        setAge(getAge+1)
    }

  
    return(<div
    >
        {getCount}<br/>
        age-{getAge}<br/>
    <button onClick={incrementHandler}>Increment</button><br/>
    <button onClick={ageHandler}>age</button><br/>
     {Even ? "even number":"odd number"}
    </div>)
}

export default UseMemo;