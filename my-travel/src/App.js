import { Route,  Routes } from 'react-router-dom';
import Navigation from './assets/Navigation';
import Login from './assets/Login';
import Main from './assets/Main';
import Register from './assets/Register';
import Footer from './assets/Footer';
import Treks from './blog/Treks';
import Travelinfo from './assets/Travelinfo';
import Destination from './assets/Destination';
import './App.css';


function App() {
  return (
    
    <div className='app'>
    <Navigation/>
    
     <Routes>
        <Route path="/" element={<Main />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/register" element={<Register />} />
        <Route path="/treks" element={<Treks />} />
        <Route path="/travelinfo" element={<Travelinfo />} />
      
        <Route path="/destination" element={<Destination />} />

  </Routes>
   <Footer/>   
    
    </div>
  );
}

export default App;

