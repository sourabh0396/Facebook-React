import React from "react";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Avatar } from "@mui/material";
import PublicIcon from '@mui/icons-material/Public';
import "./css/post.css";

import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';

export function Post({photoURL, image, username, timestamp, message}){
    return(
        <div className="post">
            <div className="post-top">
                <div className="post-topleft">
                    <Avatar src={photoURL}/>
                    <div className="postInfo"/>
                    <h4>{username}</h4>
                    <p>{timestamp}<PublicIcon/></p>

                </div>
                <MoreHorizIcon/>
            </div>
            <div className="post-middle">
                <p>{message}</p>
                {image && <img src={image}/>}
            </div>
            <div className="post-bottom">
                <div className="post-bottomOptions">
                    <ThumbUpIcon/><p>Like</p>
                </div>
                <div className="post-bottomOptions">
                    <CommentIcon/><p>Comment</p>
                </div>
                <div className="post-bottomOptions">
                    <ShareIcon/><p>share</p>
                </div>

            </div>
        </div>
    )

}
export default Post;