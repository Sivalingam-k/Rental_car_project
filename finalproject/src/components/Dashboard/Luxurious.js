
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddIcon from '@mui/icons-material/Add';
import { Link, useParams } from 'react-router-dom';
import Rating from '@mui/material/Rating';



const CarDetails = (car) => {

    const {carid}= useParams();
    const [users,setUsers] =useState([]);
    const[itemData,setItemData] = useState([])
    const [clicking,setclikcing] = useState(0);



    /// by using the count to the perticular car

    const [cars, setCars] = useState([]);

  useEffect(() => {
    fetchCars();
  }, []);


  //to get the data from the query of luxurious car
  const fetchCars = async () => {
    try {
      const response = await fetch('http://localhost:8888/car?type=luxurious');
      if (!response.ok) {
        throw new Error('Failed to fetch cars');
      }
      const data = await response.json();
      setCars(data);
    } catch (error) {
      console.error('Error fetching cars:', error);
    }
  };


  
  const handleAddOne =  (car) => {
    const newStatus = sessionStorage.getItem("user")
    const newcount = 1
      axios.put(`http://localhost:8888/car/${car.id}`, { ...car, user:  sessionStorage.getItem("user") })
      // axios.put(`http://localhost:8888/car/${car.id}`, { ...car, status: newcount })
      .then(() => {
        setItemData(itemData.map(item => item.id === car.id ? { ...item, user: newStatus } : item));
      })
      .catch((error) => {
        console.error('There was an error updating the status!', error);
      });
      const updatedCars = cars.map(car => {
        if (car.carid === carid) {
          return { ...car, count: 1 }; // Set count to 1 for the clicked car
        }
        return car;
      });
   

      

      setCars(updatedCars);

    
  };

    // fratching the car items this use effect was do 
    useEffect(()=>{
        featchCarItens() 
    },[])




    // fratching the userdetails items this use effect was do
    useEffect(()=>{
        UserDetails()
    },[])


    // by using the car = database name ?type= keyword , and = (value of the car item)
    const featchCarItens = () =>{
        axios.get("http://localhost:8888/car?type=luxurious").then((referance)=>{
            // setCarItems(referance.data)
            console.log(referance.data)
        }).catch((error)=>{})
    }
    const UserDetails = () =>{
        axios.get("http://localhost:8888/users").then((referance)=>{
          setUsers(referance.data)
            console.log(referance.data)
        }).catch((error)=>{})
    }



    

  return  <>

        {/* by using the session storage method for getting the username */}

  
        <div className="container mt-5">
      <div className="row">
        {
        
        cars.map((val, index) => (
            <div key={val.id}  className="col-lg-4 col-md-4 col-sm-6">
            <div className="card mb-3" id='card'>
              <img src={val.carimage} className="card-img-top" alt={val.name} style={{height:"300px"}} />
              <div className="card-body">
                <h5 className="card-title">{val.carname}</h5>
                <p className="card-text">CarRank: <strong> {val.carrank} </strong> type: <strong> {val.drivingtype} </strong>model : <strong> {val.carmodel}</strong></p>
                {/* <p style={{alignItems:"right"}} className='float-right'>addning car:<strong> {val.count} </strong></p> */}
                <button key={users.id} onClick={() => handleAddOne(val)} className="btn btn-primary float-left">{val.price} Only/-  </button> 
              </div>  
              
            </div>
          </div>))}
      </div>
    </div>
    

        </>
        

        }
export default CarDetails