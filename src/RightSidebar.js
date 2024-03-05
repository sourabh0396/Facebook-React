import React from "react";
import "./css/rightsidebar.css";
import { Avatar } from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import NotificationsIcon from '@mui/icons-material/Notifications';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VideocamIcon from '@mui/icons-material/Videocam';
import SearchIcon from '@mui/icons-material/Search';

export function RightSidebar(){
    return(
        <div className="widget">
            <div className="widget-header">
                <div className="widget-headerLeft">
                    <h4>Your Pages</h4>
                </div>
                <MoreHorizIcon/>
            </div>
            <div className="widget-body">
                <div className="widget-bodyOptions">
                    <Avatar src="https://cdn.vectorstock.com/i/preview-1x/54/63/initial-sp-letter-royal-luxury-logo-template-vector-42835463.jpg"/>
                    <h4>Sourabh03</h4>
                </div>
                <div className="widget-bodyOptions ml-10">
                    <NotificationsIcon/>
                    <h4>1 Notificationo</h4>
                </div>
                <div className="widget-bodyOptions ml-10">
                    <VolumeUpIcon/>
                    <h4>Create Promotions</h4>
                </div>
            </div>

            <hr/>
            <br/>


            <div className="widget-header">
                <div className="widget-headerLeft">
                    <h4>Contact</h4>
                </div>
                <div className="widget-headerRight">
                    <VideocamIcon/>
                    <SearchIcon/>
                    <MoreHorizIcon/>
                </div>
            </div>


            <div className="widget-body">
                <div className="widget-bodyOptions">
                    <Avatar src="https://cdn.vectorstock.com/i/preview-1x/54/63/initial-sp-letter-royal-luxury-logo-template-vector-42835463.jpg"/>
                    <h4>Sourabh03</h4>
                </div>
                <div className="widget-bodyOptions">
                    <Avatar src="https://d2e1hu1ktur9ur.cloudfront.net/wp-content/uploads/2023/07/Vijay-Devarakonda-1.jpg"/>
                    <h4>Shubham</h4>
                </div>
                <div className="widget-bodyOptions">
                    <Avatar src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/dulquer-salmaan-37626-19-09-2017-04-04-09.jpg"/>
                    <h4>Abhi</h4>
                </div>
                <div className="widget-bodyOptions">
                    <Avatar src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/varun-dhawan-21064-12-09-2017-02-22-38.jpg"/>
                    <h4>Pratik</h4>
                </div>
                <div className="widget-bodyOptions">
                    <Avatar src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/ranbir-kapoor-2817-1691565170.jpg"/>
                    <h4>Gajanan</h4>
                </div>
                <div className="widget-bodyOptions">
                    <Avatar src="https://m.media-amazon.com/images/M/MV5BNDViM2ZiZjgtYjcwNS00OTk3LTg3YjItNDA2MzMxZjNmOGY4XkEyXkFqcGdeQXVyNjkwOTg4MTA@._V1_.jpg"/>
                    <h4>Rahul</h4>
                </div>
                <div className="widget-bodyOptions">
                    <Avatar src="https://5.imimg.com/data5/SELLER/Default/2023/2/NZ/AS/UT/183723245/allu-arjun-men-s-shirt.jpeg"/>
                    <h4>Allu Arjun</h4>
                </div>
                <div className="widget-bodyOptions">
                    <Avatar src="https://m.economictimes.com/thumb/msid-96317355,width-1200,height-900,resizemode-4,imgsize-180422/kartik-aaryan-undergoing-major-physical-makeover-for-kabir-khans-upcoming-movie.jpg"/>
                    <h4>Kartik Aryan</h4>
                </div>
            </div>
        </div>
    )
}
export default RightSidebar;