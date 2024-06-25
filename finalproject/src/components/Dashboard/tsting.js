import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CarComponent = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetchCars();
  }, []);

  // Fetch cars from JSON Server
  const fetchCars = async () => {
    try {
      const response = await axios.get('http://localhost:8888/car');
      setCars(response.data);
    } catch (error) {
      console.error('Error fetching cars:', error);
    }
  };

  // Update status and count for a specific car
  const handleUpdateCar = async (carId) => {
    try {
      // Find the car to update
      const carToUpdate = cars.find(car => car.carid === carId);
      if (!carToUpdate) {
        console.error(`Car with ID ${carId} not found.`);
        return;
      }

      // Prepare updated data
      const updatedCar = {
        ...carToUpdate,
        status: true,
        count: carToUpdate.count + 1
      };

      // PUT request to update the car in JSON Server
      await axios.put(`http://localhost:8888/car/${carId}`, updatedCar);

      // Update local state to reflect the change
      const updatedCars = cars.map(car => 
        car.carid === carId ? updatedCar : car
      );
      setCars(updatedCars);

      console.log(`Updated status and count for car with ID ${carId} successfully.`);
    } catch (error) {
      console.error('Error updating car:', error);
    }
  };

  return (
    <div>
      {cars.map(cars => (
        <div key={cars.carid}>
          <h2>{cars.carname}</h2>
          <p>Price: {cars.price}</p>
          <img src={cars.carimage} alt={cars.carname} style={{ width: '300px', height: 'auto' }} />
          <p>Status: {cars.status ? 'True' : 'False'}</p>
          <p>Count: {cars.count}</p>
          <button onClick={() => handleUpdateCar(cars.carid)}>Update Status and Count</button>
        </div>
      ))}
    </div>
  );
};

export default CarComponent;
