import React, { useState } from 'react';
import { Tabs, Tab, AppBar } from '@material-ui/core'


const TabBar = () => {

    const [selectedTab, setSelectedTab] = useState(0);

    const handleChange = (event, newValue) => {
      setSelectedTab(newValue);
    }

    return (
        <AppBar>
            <Tabs value={selectedTab} onChange={handleChange} >
                <Tab label="Home" />
                <Tab label="Make A Reservation" />
                <Tab label="About" />
            </Tabs>
      </AppBar>
    )

}

export default TabBar