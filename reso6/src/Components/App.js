import '../App.css';
import React from 'react'
import Home from './Home'
import TabBar from './TabBar'
// import MakeReservation from './MakeReservation'
import About from './About'
import {
  Navigate,
  Routes,
  Route
} from 'react-router-dom'

const App = () => {



  return (
      <div>
        <Home />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home/:page?" element={props => <TabBar {...props} />} />
          {/* {/* <Route path="/MakeReservation" element={<MakeReservation />} /> */}
          <Route path="/About" element={<About />} />
        </Routes>
      </div>
  );
}

export default App;