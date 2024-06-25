import React from 'react';
import { Link , useNavigate} from 'react-router-dom';


const NavComp = () => {
    const nav= useNavigate();

    const redirect =()=>{
        window.confirm(`Are you sure you want to login`)
        nav('login');
    }
    return (
        <div>
            <button className='btn btn-danger btn-sm' onClick={()=>redirect()}>Login</button>{" "}
        </div>
    )
}

export default NavComp
