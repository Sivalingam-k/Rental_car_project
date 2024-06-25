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
    
    <div className='mt-5 float-right' style={{margin:"auto"}}>
    
{
  itemData.map((val, index) => (
    <div key={index} className="col-lg-4 col-md-4 col-sm-6">
      <figure class="figure">
  <img src={val.avatar} id="avatar" class="figure-img img-fluid rounded float-right" alt="..."/>
  <figcaption class="figure-caption">A caption for the above image.</figcaption>
</figure>
   
        <h5 className="card-title">{val.username}</h5>
        <p className="card-text"><strong> {val.useremail} </strong></p> 
    

      <table>
          <thead>
            <tr>
              <th></th>
            </tr>
          </thead>
      </table>
</div>
  ))
}



</div>
  )
}

export default UserInfo