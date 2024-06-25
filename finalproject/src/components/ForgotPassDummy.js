import React, { useEffect, useState } from 'react'
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


const ForgotPassComp = () => {
    const{id}= useParams();
    const nav= useNavigate();

    const[user,setuser]= useState({
        id:"",
        useremail:"",
        userpassword:"",
        term:false

    });
    const inputChangeHandler = (events)=>{
        const {type,name,value} = events.target;
        setuser({...user,[name]:value});
    }
    const updatechanges = (event)=>{
        event.preventDefault();
        axios.put(`http://localhost:8888/users/${id}`,user).then(()=>{
            window.alert("Record Updated Successsfully");
            nav('/maindashboard/productdash');
        }).catch(()=>{})
    
       
    }
    


    useEffect(()=>{
        axios.get(`http://localhost:8888/users/${id}`).then((res)=>{
            setuser(res.data);
        }).catch(()=>{})
    },[])
    return (
        <div>
            <center>
                <Link className='btn btn-secondary btn-sm'><LockOpenIcon></LockOpenIcon></Link>
                <div className='row'>
                    <div className='col-sm-3'></div>
                    <div className='col-sm-6'>
                        <form onSubmit={updatechanges}>
                        <label>User Email</label>
                        <input type='text' name='useremail' onChange={inputChangeHandler} value={user.useremail} className='form-control'/>
                            <label className='form-label'>New Password</label>
                            <input type='password' name='userpassword'  onChange={inputChangeHandler} value={user.userpassword} className='form-control'/>
                            {/* <label className='form-label'>Confirm Password</label>
                            <input type='password' name='userpassword'  onChange={inputChangeHandler} value={user.userpassword} className='form-control'/> */}
                            <button type='submit' className='btn btn-primary'>Submit</button>
                        </form>
                    </div>
                </div>
            </center>

        </div>
    )
    }