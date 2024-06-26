import React from 'react'
import axios from 'axios';
import { useEffect,useState } from 'react';
const UserInfo = () => {

  let userinfos = sessionStorage.getItem('user')
  const [itemData,setItemData] = useState([]);

  useEffect(()=>{
    featchuser() 
},[])

    const featchuser= () =>{
      axios.get(`http://localhost:8888/users?useremail=${userinfos}`).then((referance)=>{
          // setItemData(referance.data)
          setItemData(referance.data)
          console.log(referance.data)
      }).catch((error)=>{})
  }
  return (
    
    <div className='.d-inline-flex. p-5 bd-highlight' style={{margin:"auto"}}>
{
  itemData.map((val, index) => (
    <div key={index} className="col-lg-4 col-md-4 col-sm-6">
   
        <h5 className="card-title display-1">{val.username}</h5>
        <p className="card-text display-5"><strong> {val.useremail} </strong></p> 
      
</div>
  

  ))
}



</div>
  )
}

export default UserInfo