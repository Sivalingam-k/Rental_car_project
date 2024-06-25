
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import "../Dashboard/dashbord.css"


const CarDetails = (car) => {


    const [users,setUsers] =useState([]);
    // const[Luxurious,setlux] = useState([])
    const [clicking,setclikcing] = useState(0);



    /// by using the count to the perticular car

    const [cars, setCars] = useState([]);

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      const response = await fetch('http://localhost:8888/car?type=delux');
      if (!response.ok) {
        throw new Error('Failed to fetch cars');
      }
      const data = await response.json();
      setCars(data);
    } catch (error) {
      console.error('Error fetching cars:', error);
    }
  };

  const handleAddOne = async (carid) => {


      const updatedStatus = true;

    // PUT request to update the car status in JSON Server
    axios.put(`http://localhost:8888/car/${carid}`, { status: updatedStatus })
      .then(response => {
        window.alert(`Status updated successfully for car ${car.carname}`);
        // Optionally update local state or UI to reflect the change
      }).catch((error)=>{}) 
      const updatedCars = cars.map(car => {
        if (car.carid === carid) {
          return { ...car, count: 1 }; // Set count to 1 for the clicked car
        }
        return car;
      });

      setCars(updatedCars);

      const carToUpdate = updatedCars.find(car => car.carid === carid);
      await fetch(`http://localhost:8888/car/${carid}`, {
        method: 'PUT', // Update existing car using PUT
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(carToUpdate),
      });
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
        axios.get("http://localhost:8888/car?type=delux").then((referance)=>{
            // setCarItems(referance.data)
            console.log(referance.data)
        }).catch((error)=>{})
    }
    const UserDetails = () =>{
        axios.get("http://localhost:8888/user").then((referance)=>{
          setUsers(referance.data)
            console.log(referance.data)
        }).catch((error)=>{})
    }

    // this below section was put the user id into the car database 

    const handleButtonClick = (carId, userId) => {
      // Find the user to update
      const userToUpdate = users.find(user => user.id === userId);
    
      if (!userToUpdate) {
        console.error(`User with id ${userId} not found.`);
        return;
      }
    
      // Find the car to associate
      const carToAdd = cars.find(car => car.carid === carId);
    
      if (!carToAdd) {
        console.error(`Car with id ${carId} not found.`);
        return;
      }
    
      // Update user's cars array with the new car id
      const updatedUser = {
        ...userToUpdate,
        cars: [...userToUpdate.cars, carId]
      };
    
      // PUT request to update user data with new car id
      axios.put(`http://localhost:5000/users/${userId}`, updatedUser)
        .then(response => {
          console.log(`Car ${carId} added to user ${userId} successfully.`);
          // Optionally update local state or UI to reflect the changed
          setUsers(users.map(user => user.id === userId ? updatedUser : user));
        })
        .catch(error => {
          console.error('Error updating user data:', error);
          // Handle error, show error message, etc.
        });
    };
    //end of the code

  return  <>

        {/* by using the session storage method for getting the username */}

  
        <div className="container mt-5">
      <div className="row">
        {
        
        cars.map((val, index) => (
            <div  key={val.id} className="col-lg-4 col-md-4 col-sm-6">
            <div className="card mb-3 border" id="card">
              <img src={val.carimage} className="card-img-top" alt={val.name} style={{height:"300px"}} />
              <div className="card-body">
                <h5 className="card-title">{val.carname}</h5>
                <p className="card-text">CarRank: <strong> {val.carrank} </strong> type: <strong> {val.drivingtype} </strong>model : <strong> {val.carmodel}</strong></p>
                <p style={{alignItems:"right"}} className='float-right'>addning car:<strong> {val.count} </strong></p>
                <button key={users.id} onClick={() => handleAddOne(val.carid)} className="btn btn-primary float-left">{val.price} Only/-  </button> 
              </div>  
              
            </div>
          </div>))}
      </div>
    </div>
    

        </>
        

}
export default CarDetails