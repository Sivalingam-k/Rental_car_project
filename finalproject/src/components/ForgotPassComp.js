import React, { useEffect, useState } from 'react';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const ForgotPassComp = () => {
  // const { id } = useParams();
  // console.log(id);
  const navigate = useNavigate();

  const [user, setUser] = useState({
    id: '',
    useremail: '',
    userpassword: '',
  });

  const [confirmPassword, setConfirmPassword] = useState('');

  const inputChangeHandler = (events) => {
    const { name, value } = events.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const updateChanges = async (event) => {
    event.preventDefault();

    if (user.userpassword !== confirmPassword) {
      window.alert("Passwords don't match");
      return;
    }

    try {
      const response = await axios.get("http://localhost:8888/users");
	const users = response.data
	const find_user = users.find((users)=>users.useremail === user.useremail)
      if (!find_user) {
        window.alert("User email does not match");
        return;
      }
else{
find_user.userpassword = user.userpassword

      await axios.put(`http://localhost:8888/users/${find_user.id}`, find_user);
      window.alert("Password updated successfully");
      navigate('/dash/login');
}
    } catch (error) {
      console.error("Error updating the password:", error);
      window.alert("An error occurred while updating the password");
    }
  };

  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     try {
  //       const response = await axios.get(http://localhost:8888/users/);
  //       setUser(response.data);
  //     } catch (error) {
  //       console.error("Error fetching user data:", error);
  //     }
  //   };

  //   fetchUserData();
  // }, [id]);

  return (
    <div>
      <center>
        <Link className='btn btn-secondary btn-sm'><LockOpenIcon /></Link>
        <div className='row'>
          <div className='col-sm-3'></div>
          <div className='col-sm-6'>
            <form onSubmit={updateChanges}>
              <label>User Email</label>
              <input
                type='email'
                name='useremail'
                onChange={inputChangeHandler}
                value={user.useremail}
                className='form-control'
                required
              />
              <label className='form-label'>New Password</label>
              <input
                type='password'
                name='userpassword'
                onChange={inputChangeHandler}
                value={user.userpassword}
                className='form-control'
                required
              />
              <label className='form-label'>Confirm Password</label>
              <input
                type='password'
                onChange={handleConfirmPasswordChange}
                value={confirmPassword}
                className='form-control'
                required
              />
              <button type='submit' className='btn btn-primary'>Submit</button>
            </form>
          </div>
        </div>
      </center>
    </div>
  );
};

export default ForgotPassComp;