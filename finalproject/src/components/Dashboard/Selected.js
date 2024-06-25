
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';

// not to finish
const Selected = () => {

    const [CarItems ,setCarItems] =useState([]);
    const [Userdetails,setuserdetails] =useState([]);

    const[Luxurious,setlux] = useState([])



    // fratching the car items this use effect was do 
    useEffect(()=>{
        featchCarItens() 
    },[1])




    // fratching the userdetails items this use effect was do
    useEffect(()=>{
        UserDetails()
    },[])


    // by using the car = database name ?type= keyword , and = (value of the car item)
    const featchCarItens = () =>{
        axios.get("http://localhost:8888/car?type=sports").then((referance)=>{
            setCarItems(referance.data)
            console.log(referance.data)
        }).catch((error)=>{})
    }
    const UserDetails = () =>{
        axios.get("http://localhost:8888/user").then((referance)=>{
            setuserdetails(referance.data)
            console.log(referance.data)
        }).catch((error)=>{})
    }
    
    
  return  <>

        {/* by using the session storage method for getting the username */}
        <div className="container mt-5">
      <div className="row">
        
        {
        
        CarItems.map((val, index) => (
            <div key={index} className="col-lg-4 col-md-4 col-sm-6">
            <div className="card mb-3">
              <img src={val.carimage} className="card-img-top" alt={val.name} style={{height:"300px"}} />
              <div className="card-body">
                <h5 className="card-title">{val.carname}</h5>
                <p className="card-text">CarRank: <strong> {val.carrank} </strong> type: <strong> {val.drivingtype} </strong>model : <strong> {val.carmodel}</strong></p>
                <p className="float-left"></p>
                <button className="btn btn-primary float-left">{val.price} Car Price here</button>
                
              </div>
              
            </div>
          </div>))}
      </div>
    </div>
    

        </>
        

}
export default Selected