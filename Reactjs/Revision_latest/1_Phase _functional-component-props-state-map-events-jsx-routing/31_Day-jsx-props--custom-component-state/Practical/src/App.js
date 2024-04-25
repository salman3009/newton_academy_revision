
import './App.css';
import Bike from './component/Bike/Bike';
import Button from './component/Button/Button';
import Register from './component/Register/Register';
function App(){
      return (
        <div>
          <Register/>
          <Bike title="pulsar" amount="2000"/>
          <Bike  title="bajaj" amount="6000"/>
          <Bike  title="ktm" amount="7000"/>
          <Bike  title="bmw" amount="8000"/>
          <Bike  title="electric" amount="66000"/>
          <Button type="buttonOne" value="submit"/>
          <Button type="buttonTwo" value="Add"/>
        </div>
   
      )
}
export default App;