import React, { useContext, useEffect, useState } from 'react';

import axios from 'axios'
import { UserContext } from '../context/UserContext';
function History(){  
    const [searchhistory,setSearchhistory] = useState([])
    const{user,setUser} = useContext(UserContext)
    useEffect(() =>{
        //get history on load
            console.log("Hello");
                axios.get(`/history`)
                .then( res => {
                    setSearchhistory(JSON.stringify(res.data))
                })
                .catch( err => console.log(err))
    },[])
    return (
        <div id='history' style={{minHeight:100+'vh',color:"black",backgroundColor:"white",fontSize:14+"px"}}>
           {user!=null?searchhistory:searchhistory}
        </div>
    )

}
export default History