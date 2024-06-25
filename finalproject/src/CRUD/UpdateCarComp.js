import React from 'react'
import { useState ,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const UpdateCarComp = () => {
    const {id} = useParams();
    const nav = useNavigate()
    const [itemData,setItemData] = useState({
        carid:"",
        carname:"",
        drivingtype:"",
        carrank:"",
        carmodel:"",
        carimage:"",
    });

    const inputChangeHandler = (events)=>{
            const {type,name,value} = events.target;
            setItemData({...itemData,[name]:value});
    }
    const updateRecord = (event)=>{
        event.preventDefault();
        axios.put(`http://localhost:8888/car/${id}`,itemData).then(()=>{
            window.alert("Record Updated Successsfully");
            nav('/adminDashboard');
        }).catch((error)=>{})
    }
    useEffect(()=>{
        axios.get(`http://localhost:8888/car/${id}`).then((res)=>{
            console.log(res.data);
            setItemData(res.data);
        }).catch((error)=>{})
    },[])
    return (
        <div>
        <h2>UPDATE CAR DETAILS</h2>
        <div className='row'>
          <div className='col-sm-3'></div>
          <div className='col-sm-6'>
        
          <form onSubmit={updateRecord}>
       <label for="carname">Car Name</label>
       <input type="text" className="form-control" name="carname"  onChange={inputChangeHandler} value={itemData.carname} />
 
  
       <label for="carprice">Car Price</label>
       <input type="text" className="form-control" name="price" onChange={inputChangeHandler} value={itemData.price} required/>
   
       <label for="carrank">Car Rank</label>
       <input type="text" className="form-control" name="carrank" onChange={inputChangeHandler} value={itemData.carrank} />
  
       <label for="carmodel">Car Model</label>
       <input type="text" className="form-control" name="carmodel" onChange={inputChangeHandler} value={itemData.carmodel} />
  
       <label for="drivingtype">Driving Type</label>
       <select className="form-control" name="drivingtype" onChange={inputChangeHandler} value={itemData.drivingtype} >
           <option value="">Select driving type</option>
           <option value="automatic">Automatic</option>
           <option value="manual">Manual</option>
       </select>
      

      
       <label for="cartype">Car Type</label>
       <select className="form-control" name="type" onChange={inputChangeHandler} value={itemData.type} >
           <option value="">Select car type</option>
           <option value="luxurious">Luxurious</option>
           <option value="normal">Normal</option>
       </select>
       <label for="status">Car Image</label>
       <input type="text" className="form-control" name="carimage" onChange={inputChangeHandler} value={itemData.carimage} />
       
       <label for="status">Car Status</label>
       <select className="form-control" name="status" onChange={inputChangeHandler} value={itemData.status} >
           <option value="">Select car Status</option>
           <option value="Booked">Booked</option>
           <option value="Not-Booked">Not-Booked</option>
       </select>
  
   <button type="submit" className="btn btn-primary mt-3 form-control">Submit</button>
</form>


          </div>
          <div className='col-sm-3'></div>
         </div>
     </div>
    )
}

export default UpdateCarComp
