
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';

const Selected = () => {

  const [users,setUsers] =useState([]);
  const[itemData,setItemData] = useState([])
  const [clicking,setclikcing] = useState(0);


  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      let userdata = sessionStorage.getItem('user'); 
      const response = await fetch(`http://localhost:8888/car?user=${userdata}`);
      if (!response.ok) {
        throw new Error('Failed to fetch cars');
      }
      const data = await response.json();
      setCars(data);
    } catch (error) {
      console.error('Error fetching cars:', error);
    }
  };

    
  return  <>

        {/* by using the session storage method for getting the username */}
        <div className="container mt-5">
      <div className="row">{

        cars.map((val, index) => (
            <div key={val.id}  className="col-lg-4 col-md-4 col-sm-6">
            <div className="card mb-3" id='card'>
              <img src={val.carimage} className="card-img-top" alt={val.name} style={{height:"300px"}} />
              <div className="card-body">
                <h5 className="card-title">{val.carname}</h5>
                <p className="card-text">Booked by: <strong>  {val.user} </strong></p>
                {/* <button key={users.id} onClick={() => handleAddOne(val)} className="btn btn-primary float-left">{val.price} Only/-  </button>  */}
              </div>  
              
            </div>
          </div>))}
      </div>
    </div>
    

        </>
        

}
export default Selected