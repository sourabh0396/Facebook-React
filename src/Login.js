import React from "react";
import "./css/login.css"
import { useStateValue } from "./StateProvider";

export default function Login(){

    // const[{user}, dispatch]=useStateValue();
    // const signIn=()=>{
    //     auth.signInWithPopup(provider).then(result=>{
    //         var credential = result.credential;
    //         const photoURL = `${result.user.photoURL}?access_token=${credential.accessToken}`;
    //         dispatch({
    //             type:"SET_USER",
    //             user:{
    //                 displayName:result.user.displayName,
    //                 photoURL:photoURL
    //             }
    //         })
    //     }).catch(error=>console.log(error))
    // }

    return(
        <div className="login-wrapper">
            <div className="login">
                <img src="https://www.edigitalagency.com.au/wp-content/uploads/Facebook-logo-blue-circle-large-transparent-png.png" height="200px" width="200px"/>
                <h2>Sign in with Facebook</h2>
                <button>Login with Facebook</button>
            </div>
        </div>
    )
};