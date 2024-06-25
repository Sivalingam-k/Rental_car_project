import React from 'react'
import { Fragment } from 'react'
import { Outlet } from 'react-router-dom';
import AdminDashboardComp from '../layout/AdminDashboardComp';
import FooterComp from '../layout/FooterComp'
import NavComp from '../layout/NavComp';

const txt1Obj ={
  backgroundColor: 'black'
}

const Dashboards = () => {
    return (
        // <div className="mt-2" style={{txt1Obj}} >
        // <h2>This is MainDashboardComp Component</h2>  
        // <div className='container-fluid  ' style={{txt1Obj}}>
        //   <div className='container-fluid' > 
        //     <NavComp></NavComp>
        //   </div>
        //   <div className='container-fluid bg-dark' > 
        //   </div>
          <Outlet></Outlet>
      //     <div className='card-footer border-primary'> 
      //      <FooterComp></FooterComp>
      //     </div>
      //   </div>
      // </div>
    )
}

export default Dashboards
