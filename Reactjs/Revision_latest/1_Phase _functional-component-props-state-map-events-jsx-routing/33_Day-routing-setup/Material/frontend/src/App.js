import Header from './Header';
import './App.css';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import {BrowserRouter,Routes,Route} from 'react-router-dom';


function App() {
  return (
   <div>
     <BrowserRouter>
     <Header/>
      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='dashboard' element={<Dashboard/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
