import { Avatar } from "@mui/material";
import React from "react";
import "./css/story.css"

export function StoryReel(){
    return(
        <div className="StoryReel">
            <div className="Story" style={{backgroundImage:`url('https://buffer.com/library/content/images/size/w1000/2023/06/Share-story.jpeg')`}}>
                <Avatar src="https://th.bing.com/th/id/OIP.GF4tHBn5m0TSSntgxgBWaQAAAA?rs=1&pid=ImgDetMain"/>
                <h4>Sourabh</h4>
            </div>
            <div className="Story" style={{backgroundImage:`url('https://buffer.com/library/content/images/2023/06/view-a-story.gif')`}}>
                <Avatar/>
                <h4>John</h4>
            </div>
            <div className="Story" style={{backgroundImage:`url('https://c.tenor.com/dSbNNpzg48gAAAAM/hitman-rohit-sharma.gif')`}}>
                <Avatar src="https://circleofcricket.com/post_image/post_image_48cb71e.jpg"/>
                <h4>Rohit</h4>
            </div>
            <div className="Story" style={{backgroundImage:`url('https://c.tenor.com/k3xsAvK7IIIAAAAM/signature-shot-virat-kohli.gif')`}}>
                <Avatar src="https://wallpapers.com/images/featured-full/virat-kohli-yc8dfpcjssp3s4se.jpg"/>
                <h4>Virat</h4>
            </div>
            <div className="Story" style={{backgroundImage:`url('https://circleofcricket.com/post_image/post_image_d72a62f.jpg')`}}>
                <Avatar src="https://images.sportsbrief.com/images/720/f5d1272010d8ed05.webp?v=1"/>
                <h4>Sky</h4>
            </div>
        </div>
    )
}
export default StoryReel;