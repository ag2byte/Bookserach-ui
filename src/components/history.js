import React, { useEffect, useState } from 'react';

import axios from 'axios'
function History(){  
    const [searchhistory,setSearchhistory] = useState([])

    useEffect(() =>{
        //get history on load
            console.log("Hello");
                axios.get('/history')
                .then( res => {
                    setSearchhistory(JSON.stringify(res.data))
                })
                .catch( err => console.log(err))
    },[])
    return (
        <div id='history' style={{minHeight:100+'vh',color:"black",backgroundColor:"white",fontSize:14+"px"}}>
           {searchhistory}
        </div>
    )

}
export default History