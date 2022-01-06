import React, { useState } from 'react';
import { Tabs, Tab, AppBar } from '@material-ui/core'
import MakeReservation from './MakeReservation'
import About from './About'
import Home from './Home'
// import App from './App'



const TabBar = props => {

    // const { match } = props
    // const { params } = match
    // const { page } = params
    const [selectedTab, setSelectedTab] = useState(0);

    const handleChange = (event, newValue) => {
      setSelectedTab(newValue);
    }

    return (
        <>
        <AppBar>
            <Tabs value={selectedTab} onChange={handleChange} >
                <Tab label="Home" />
                <Tab label="Make A Reservation" />
                <Tab label="About" />
            </Tabs>
         </AppBar>
         
         {/* {selectedTab === 0 && <Home />}
         {selectedTab === 1 && <MakeReservation />} */}
         {selectedTab === 2 && <About />}
        </>
    )

}

export default TabBar