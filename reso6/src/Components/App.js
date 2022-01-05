import '../App.css';
import React from 'react'
import TabBar from './TabBar'
import  MakeReservation from './MakeReservation'
import About from './About'
import {
  Routes,
  Route
} from 'react-router-dom'

const App = () => {



  return (
      <div>
        <TabBar />
        <Routes>
          <Route path="/MakeReservation" element={<MakeReservation />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </div>
  );
}

export default App;
