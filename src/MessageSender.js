import { Avatar, IconButton, Modal } from "@mui/material";
import React, { useState } from "react";
import "./css/messagesender.css";

import VideoCallIcon from '@mui/icons-material/VideoCall';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import MoodIcon from '@mui/icons-material/Mood';
import CloseIcon from '@mui/icons-material/Close';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { upload } from "@testing-library/user-event/dist/upload";

function MessageSender(){
    const[open,setOpen]=useState(true);
    const[image, setImage] = useState("");
    const[message, setMessage] = useState("");
    const handleClose=()=>{
        setOpen(false)
    }

    const UploadFilewithClick=()=>{
        document.getElementById("imageFile").click();

    }
    const handleChange=(e)=>{
         if(e.target.files[0])
         {
            setImage(e.target.files[0]);
         }
         console.log(image);
    }

    const handleOpen=()=>{
        setOpen(true)
    }

    const handleUpload=(e)=>{
        e.preventDefault();
        // if(image===""){
        //     db.collection("posts").add({
        //         timestamp:firebase.firestore.FieldValue.serverTimeStamp(),
        //         message:message,
        //         usename:user.displayName,
        //         photoURL:user.photoURL
        //     })
        // }
        // else{
        //     const uploadTask=Storage.ref(`images/${image.name}`.put(image));
        //     uploadTask.on(
        //         "state_changed",
        //         (snapshot)=>{
        //             const progress = Math.round((snapshot.bytesTransferred/snapshot.totalBytes) * 100);
        //             setProgress(progress);
        //         },
        //         (error)=>{
        //             console.log(error);
        //             alert(error.message);
        //         },
        //         ()=>{
        //             Storage.ref("images").child(image.name).getDownloasURL()
        //         }
        //     )
        // }
    }


    
    return(
        <>
        <Modal open={open} onClose={handleClose}>
            <div className="modal-pop">
                <form>
                    <div className="modalHeading">
                        <h3>Create Post</h3>
                        <IconButton onClick={handleClose}>
                            <CloseIcon/>
                        </IconButton>
                    </div>
                    <div className="modalHeader-top">
                        <Avatar/>
                        <h5>Sourabh Patil</h5>                       
                    </div>
                    <div className="modalBody">
                            <textarea rows="5" placeholder="what's on your mind Sourabh" onChange={e=>setMessage(e.target.value)}>{message}</textarea>
                    </div>
                    <div className="modalFooter">
                        <div className="modalFooterLeft">
                            <h4>Add to Your Post</h4> 
                        </div>
                        <div className="modalFooterRight">
                            <IconButton onClick={UploadFilewithClick}>
                                <PhotoLibraryIcon fontSize="large" style={{color:"lightgreen"}}/>
                            </IconButton>
                            <input type="file" id="imageFile" onChange={handleChange} style={{display:"none"}}/>
                            
                            <IconButton>
                                <VideoCallIcon fontSize="large" style={{color:"red"}}/>
                            </IconButton>
                            <IconButton>
                                <InsertEmoticonIcon fontSize="large" style={{color:"yellow"}}/>
                            </IconButton>
                        </div>
                    </div>
                    <progress value="20" max="100"></progress>
                    <input type="submit" onClick={handleUpload} className="post-submit" value="Post" />
                </form>
            </div>
        </Modal>

        <div className="messagesender">
            <div className="messagesender-top">
                <Avatar/>
                <form>
                    <input type="text" placeholder="whats on you mind Sourabh" onClick={handleOpen}/>
                </form>
            </div>
            <div className="messagesender-bottom">
                <div className="messagesender-options">
                    <VideoCallIcon style={{color:'red'}} fontSize="large"/><p>Live Video</p>
                </div>
                <div className="messagesender-options">
                    <PhotoLibraryIcon style={{color:'lightgreen'}}/><p>Photo/Video</p>
                </div>
                <div className="messagesender-options">
                    <MoodIcon style={{color:'#ffb100'}}/><p>Feeling/Activity</p>
                </div>
            </div>
        </div>
        </>
    )
}
export default MessageSender;