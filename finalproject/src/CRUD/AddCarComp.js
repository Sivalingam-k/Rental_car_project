import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import '../components/Dashboard/addcarmodulecss.module.css'
const AddCarComp = () => {
    const nav = useNavigate()
    const [itemData,setItemData] = useState({
       
        carname:"",
        price:"",
        drivingtype:"",
        carrank:"",
        carmodel:"",
        carimage:"",
        user:""
    });
    
    const inputChangeHandler = (events)=>{
            const {type,name,value} = events.target;
            setItemData({...itemData,[name]:value});
    }
    const addRecord = (event)=>{
        event.preventDefault();
        axios.post(`http://localhost:8888/car`,itemData).then(()=>{
            window.alert("Record Added Successsfully");
            nav('/adminDashboard');
        }).catch((error)=>{})
    }
    return (
        <div id='add-upp'>
            <h2>CAR DETAILS</h2>
            <div className='row'>
              <div className='col-sm-3'></div>
              <div className='col-sm-6'>
            
              <form onSubmit={addRecord}>
           <label for="carname">Car Name</label>
           <input type="text" className="form-control" name="carname"  onChange={inputChangeHandler} value={itemData.carname} placeholder="Enter car name" required/>
     
      
           <label for="price">Car Price</label>
           <input type="text" className="form-control" name="price" onChange={inputChangeHandler} value={itemData.price} placeholder="Enter car price" required/>
       
           <label for="carrank">Car Rank</label>
           <input type="text" className="form-control" name="carrank" onChange={inputChangeHandler} value={itemData.carrank} placeholder="Enter car rank" required/>
      
           <label for="carmodel">Car Model</label>
           <input type="text" className="form-control" name="carmodel" onChange={inputChangeHandler} value={itemData.carmodel} placeholder="Enter car model" required/>
      
           <label for="drivingtype">Driving Type</label>
           <select className="form-control" name="drivingtype" onChange={inputChangeHandler} value={itemData.drivingtype} required>
               <option value="">Select driving type</option>
               <option value="automatic">Automatic</option>
               <option value="manual">Manual</option>
           </select>
           <label for="cartype">Car Type</label>
           <select className="form-control" name="type" onChange={inputChangeHandler} value={itemData.type} required>
               <option value="">Select car type</option>
               <option value="luxurious">Luxurious</option>
               <option value="sports">Sports</option>
               <option value="suplux">SuperLuxurious</option>
               <option value="delux">Delux</option>
           </select>
           <label for="status">Car Image</label>
           <input type="text"  className="form-control image" name="carimage" onChange={inputChangeHandler} value={itemData.carimage} placeholder="Car Image" required/>
           
           <label for="status">Car Status</label>
           <select className="form-control" name="status" onChange={inputChangeHandler} value={itemData.status} required>
               <option value="">Select car Status</option>
               <option value="Booked">Booked</option>
               <option value="Not-Booked">Not-Booked</option>
           </select>
      
       <button type="submit" className="btn btn-info mt-3 form-control" >Submit</button>
   </form>


              </div>
              <div className='col-sm-3'></div>
             </div>
         </div>
       
    )
}
    

export default AddCarComp
