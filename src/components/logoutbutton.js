import axios from "axios";
import React, {useContext } from "react";
import {GoogleLogout} from 'react-google-login'
import { UserContext } from "../context/UserContext";


function LogoutButton(){

    const {user,setUser} = useContext(UserContext)
    const onLogoutSuccess = (res)=>{
        axios.get(`/logout`)
        .then(res => console.log(res.data))
        setUser(null)
    }
    const onFailure = ()=>{
        console.log('Log out unsuccessfull');
    }

    return (
        <>
         <GoogleLogout   
             clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
             buttonText="Log Out"
             onLogoutSuccess={onLogoutSuccess}
             onFailure={onFailure}
            />

            </>

)

}
export default LogoutButton