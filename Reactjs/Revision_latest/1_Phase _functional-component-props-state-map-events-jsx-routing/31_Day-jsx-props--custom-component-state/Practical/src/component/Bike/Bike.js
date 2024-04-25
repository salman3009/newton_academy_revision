import car from '../../assets/car.png';

function Bike(props){
     let titleName = "Bajaj";
     let amount = 6000;
     console.log(car);

     function policy(){
        return "policy discount";
     }

    return (<div className="box">
        <p>{2+2}</p>
        <p>{props.title}</p>
        <p>Amount:{props.amount}</p>
        <p>{policy()}</p>
        <p>{titleName === "pulsar"?"yes pulsar":"other details"}</p>
        <img src={require(`../../assets/car.png`)}/>
    </div>)
}

export default Bike;