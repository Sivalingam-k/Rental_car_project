import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ProtectedRouting = ({Component}) => {
      
    const nav = useNavigate();
    useEffect(()=>{
        
        if(!sessionStorage.getItem("user")){
           nav("/");
        }else if(sessionStorage.getItem("user") == ("victor@gmail.com")){
         console.log(sessionStorage.getItem("user") );
            nav("/adminDashboard")
        }
    },[])
   
   
   
    return (
        <div>
            <Component></Component>
           
        </div>
    )
}

export default ProtectedRouting