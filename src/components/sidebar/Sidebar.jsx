import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar border-r-[2px] border-gray-300 min-h-screen bg-white' style={{flex:"1"}} >
      <div className='top h-[54px] flex items-center justify-center'> 
       <Link to="/">
       <span className='font-bold text-purple-700'>HotelAdmin</span>
       </Link>
      </div>
      <hr className='border-[1px] border-gray-300'/>
      <div className='middle pl-3'>
        <ul className=''>
            <p className=" text-[10px] font-bold text-[#999] mt-5">MAIN</p>
            <li className="flex items-center gap-2 mt-1 cursor-pointer hover:text-purple-700"><DashboardIcon/><span>Dashboard</span></li>
            <p className=" text-[10px] font-bold text-[#999] mt-5">LISTS</p>
            <li className="flex items-center gap-2 mt-1 cursor-pointer hover:text-purple-700"><PersonOutlineIcon/>
            <Link to={"/users"}><span>Users</span></Link>
            </li>
            <li className="flex items-center gap-2 mt-1 cursor-pointer hover:text-purple-700"><LocalShippingIcon/><Link to={"/products"}><span>Products</span></Link></li>
            <li className="flex items-center gap-2 mt-1 cursor-pointer hover:text-purple-700"><CreditCardIcon/><span>Orders</span></li>
            <li className="flex items-center gap-2 mt-1 cursor-pointer hover:text-purple-700"><StoreIcon/><span>Delivery</span></li>
            <p className=" text-[10px] font-bold text-[#999] mt-6">USEFUL</p>
            <li className="flex items-center gap-2 mt-1 cursor-pointer hover:text-purple-700"><InsertChartIcon/><span>Stats</span></li>
            <li className="flex items-center gap-2 mt-1 cursor-pointer hover:text-purple-700"><NotificationsNoneIcon/><span>Notifications</span></li>
            <p className=" text-[10px] font-bold text-[#999] mt-5">SERVICE</p>
            <li className="flex items-center gap-2 mt-1 cursor-pointer hover:text-purple-700"><SettingsSystemDaydreamOutlinedIcon/><span>System Health</span></li>
            <li className="flex items-center gap-2 mt-1 cursor-pointer hover:text-purple-700"><PsychologyOutlinedIcon/><span>Logs</span></li>
            <li className="flex items-center gap-2 mt-1 cursor-pointer hover:text-purple-700"><SettingsApplicationsIcon /><span>Settings</span></li> 
            <p className=" text-[10px] font-bold text-[#999] mt-5">USER</p>
            <li className="flex items-center gap-2 mt-1 cursor-pointer hover:text-purple-700"><AccountCircleOutlinedIcon /><span>Profile</span></li>
            <li className="flex items-center gap-2 mt-1 cursor-pointer hover:text-purple-700"><ExitToAppIcon /><span>Logout</span></li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
