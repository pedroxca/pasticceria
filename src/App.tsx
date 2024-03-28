import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';


function App() {
  const history = useNavigate();
  React.useEffect(() => {
    console.log(history);
  }, []);
  return (
    <div className="App">
      <NavBar/>
      <Outlet/>
    </div>
  )
}

export default App
