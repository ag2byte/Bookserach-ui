import React, { useContext } from "react";
import axios from 'axios'
import GoogleLogin from 'react-google-login'
import {Navigate} from 'react-router-dom'

import { UserContext } from "../context/UserContext";

function LoginButton(){

    const {user,setUser} = useContext(UserContext)
    const onSuccess = async googleData=>{
        console.log('Authentication successfull');
        const res = await axios.post(`/verifyToken`,{
            token:googleData.tokenId
        })
        setUser(res.data)
    }
    const onFailure = (res)=>{
        console.log("Failure. res:",res)
    }
return (
    <>
         <GoogleLogin   
             clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
             buttonText="Sign in with Google"
             onSuccess={onSuccess}
             onFailure={onFailure}
             cookiePolicy={'single_host_origin'}

            />
        {user!=null?(<Navigate replace to="/search"/>):""}
        </>

)

}
export default LoginButton