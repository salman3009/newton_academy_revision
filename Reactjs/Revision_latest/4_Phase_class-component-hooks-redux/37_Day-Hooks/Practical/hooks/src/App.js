import React from 'react';
import './App.css';
import UseReducer from './UseReducer';
import UseRef from './UseRef';
import UseCallBack from './UseCallBack';
import UseMemo from './UseMemo';
import ComponentC from './ComponentC';
import ComponentA from './ComponentA';
import CustomHooks from './CustomHooks';
export const UserContext = React.createContext();

function App() {



  return (
    <div className="App">
          {/* <CustomHooks/> */}
           {/* <UseMemo/>
           <ComponentA/> */}
           <UserContext.Provider value={"salman"}>
           <ComponentC/>
           </UserContext.Provider>
           {/* <UseCallBack/>  */}
           {/* <UseRef/> */}
           {/* <UseReducer/> */}
    </div>
  );
}

export default App;
