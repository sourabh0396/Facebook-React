import React from "react";
import Sidebaroptions from "./Sidebaroptions";
import "./css/sidebar.css";

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PeopleIcon from '@mui/icons-material/People';
import GroupsIcon from '@mui/icons-material/Groups';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';

function Sidebar(){
    return(
        <div className="sidebar">

            <Sidebaroptions src="https://th.bing.com/th/id/OIP.GF4tHBn5m0TSSntgxgBWaQAAAA?rs=1&pid=ImgDetMain" title="Sourabh Patil"/>
            <Sidebaroptions src="https://www.facebook.com/rsrc.php/v3/yR/r/tInzwsw2pVX.png" title="Covid 19 Information Center"/>
            <Sidebaroptions Icon={PeopleIcon} title="Friends" className='friends'/>
            <Sidebaroptions Icon={GroupsIcon} title="Groups"/>
            <Sidebaroptions Icon={SmartDisplayIcon} title="Watch"/>
            <Sidebaroptions Icon={LocalActivityIcon} title="Events"/>
            <Sidebaroptions Icon={ExpandMoreIcon} title="See More"/>
            <Sidebaroptions title=""/>
        </div>
    )
}

export default Sidebar;