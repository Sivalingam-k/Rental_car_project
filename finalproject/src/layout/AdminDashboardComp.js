import React from 'react';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const AdminDashboardComp = () => {
    // const [itemData,setItemData] = useState([]);

    
   
    return (
        <div>
            <h2>This is Product Dashboard Component</h2>
            {/* <Link to="#" className='btn btn-primary mb-2'>
           Add</Link> */}

            <table className='table table-hover table-striped '>
              <thead>
                <tr className='table-dark'>
                    <th>Sr.No</th><th>Name</th><th>Price</th><th>Company</th><th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* {
                itemData.length > 0 && itemData.map((val,index)=>{
                        return <tr>
                            <td>{index+1}</td>
                            <td>{val.pname}</td>
                            <td>{val.price}</td>
                            <td>{val.company}</td>
                            <td>
                                <Link to={`#`} className='btn btn-outline-success btn-sm'>
                               
                               </Link> |
                                <button type='button'  className='btn btn-outline-danger btn-sm'>
                                    
                                </button>
                            </td>
                        </tr>
                    })
                } */}
              </tbody>
            </table>
        </div>
    )
}

export default AdminDashboardComp
