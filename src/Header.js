import React from "react";
import "./css/header.css"
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import PeopleIcon from '@mui/icons-material/People';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { Avatar,IconButton} from "@mui/material";
import AppsIcon from '@mui/icons-material/Apps';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useStateValue } from "./StateProvider";


function Header(){
    const[{user},dispatch] = useStateValue();
    return(
        <div className="header">
              <div className="header_left">
              <img src="https://logopng.com.br/logos/facebook-13.png" height="30px" width="30px" alt=""/>
                <div className="header_search">
                    <SearchIcon/><input type="text" placeholder="Facebook search"/>
                </div>
              </div>
              <div className="header_middle">
                <div className="header_option header_option_active">
                    <HomeIcon fontSize="large"/>
                </div>
                <div className="header_option ">
                    <OndemandVideoIcon fontSize="large"/>
                </div>
                <div className="header_option">
                    <PeopleIcon fontSize="large"/>
                </div>
                <div className="header_option">
                    <SportsEsportsIcon fontSize="large"/>
                </div>
              </div>
              <div className="header_right">
                <div className="header_info">
                    <Avatar src="https://th.bing.com/th/id/OIP.GF4tHBn5m0TSSntgxgBWaQAAAA?rs=1&pid=ImgDetMain"/>
                    <h5 className="MyName">Sourabh Patil</h5>
                </div>
                <IconButton><AppsIcon/></IconButton>
                <IconButton><ForumIcon/></IconButton>
                <IconButton><NotificationsIcon/></IconButton>
                <IconButton><ArrowDropDownIcon/></IconButton>
              </div>
        </div>
    )
}

export default Header;
