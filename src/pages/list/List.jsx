import React from 'react'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from '../../components/datatable/Datatable'
import { Outlet, useLocation } from 'react-router-dom'

const List = () => {
  const location = useLocation();
  const {pathname} = location
  console.log(pathname);
  return (
    <div className='flex'>
      <Sidebar/>
      <div className="listContainer" style={{flex:"6"}}>
       <Navbar/>
       
       {(pathname === "/users" || pathname === "/users/")   && <Datatable/>}
       <Outlet/>
      </div>
    </div>
  )
}

export default List
