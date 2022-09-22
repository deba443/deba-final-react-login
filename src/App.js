
import { Component, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Protected from './pages/protected';
import Welcome from './pages/Welcome';


// import Register from "./pages/Register"


function App() {
  const[isLogedIn,setisLogedIn]=useState(false)
  return (
    // <div className="App">
    //   <Login/>

    // </div>
    <Routes>
      <Route path="/" element={<Login isLogedIn={isLogedIn}/>} />
      <Route path="/welcome" element={<Protected Component={Welcome}/>} />
      {/* <Route path="invoices" element={<Invoices />} /> */}
    </Routes>
  );
}

export default App;
