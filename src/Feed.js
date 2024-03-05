import React, { useEffect, useState } from "react";
import StoryReel from "./storyreel";
import "./css/feed.css";
import MessageSender from "./MessageSender";
import Post from "./post";

export function Feed(){

    const[posts,setPosts] = useState([]);

    // useEffect(()=>{
    //     db.collection("posts").orderBy("timestamp","desc").onSnapshot(snapshot=>{
    //         setPosts(snapshot.docs.map(doc=>({
    //             id:doc.id,
    //             data:doc.data(),
    //         })))
    //     })
    // })
    return(
        <div className="feed">
            <StoryReel/>
            <MessageSender/>

            <Post photoURL="https://th.bing.com/th/id/OIP.GF4tHBn5m0TSSntgxgBWaQAAAA?rs=1&pid=ImgDetMain" image="" username="Sourabh Patil" timestamp="12:40PM" message="This is test message" />
            <Post photoURL="https://th.bing.com/th/id/OIP.GF4tHBn5m0TSSntgxgBWaQAAAA?rs=1&pid=ImgDetMain" image="https://img.freepik.com/free-vector/facebook-food-restaurant-template_23-2148690003.jpg?size=626&ext=jpg&ga=GA1.1.944362532.1693138573&semt=ais" username="Sourabh Patil" timestamp="12:40PM" message="This is test message" />

            <Post photoURL="https://5.imimg.com/data5/SELLER/Default/2023/2/NZ/AS/UT/183723245/allu-arjun-men-s-shirt.jpeg" image="https://i.pinimg.com/originals/32/ca/2a/32ca2a19227db1ed21d7373789941a06.jpg" username="Arjun" timestamp="12:40PM" message="Cool" />
            <Post photoURL="https://in.bmscdn.com/iedb/artist/images/website/poster/large/dulquer-salmaan-37626-19-09-2017-04-04-09.jpg" image="https://www.koimoi.com/wp-content/new-galleries/2022/09/dulquer-salmaan-reacts-to-nasty-comments-about-himself-says-its-really-harsh-001.jpg" username="Abhi" timestamp="11:01AM" message="Hello" />
            <Post photoURL="https://in.bmscdn.com/iedb/artist/images/website/poster/large/varun-dhawan-21064-12-09-2017-02-22-38.jpg" image="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Varun_Dhawan_promoting_Badrinath_Ki_Dulhania.jpg/220px-Varun_Dhawan_promoting_Badrinath_Ki_Dulhania.jpg" username="Pratik" timestamp="11:00AM" message="Nice" />
            <Post photoURL="https://d2e1hu1ktur9ur.cloudfront.net/wp-content/uploads/2023/07/Vijay-Devarakonda-1.jpg" image="https://e1.pxfuel.com/desktop-wallpaper/939/529/desktop-wallpaper-vijay-devarakonda-vijay-deverakonda.jpg" username="Shubham" timestamp="10:50AM" message="Hi" />
        </div>
    )
}
export default Feed;