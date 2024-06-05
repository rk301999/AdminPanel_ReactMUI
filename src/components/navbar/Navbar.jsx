import React from 'react'
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";

const Navbar = () => {
  return (
    <div className="navbar h-14 flex items-center text-sm border-b-[rgb(231,228,228)] border-2 text-[#555]">
      <div className="wrapper w-full p-5 flex items-center justify-between">
        <div className="search flex items-center border-2 border-gray-400 p-1">
          <input type="text" placeholder="Search..." className='border-none outline-none bg-transparent'/>
          <SearchOutlinedIcon />
        </div>
        <div className="items flex items-center">
          <div className="item flex items-center mr-5 ">
            <LanguageOutlinedIcon className="icon" />
            English
          </div>
          <div className="item flex items-center mr-5 ">
            <DarkModeOutlinedIcon
              className="icon"
            />
          </div>
          <div className="item flex items-center mr-5 ">
            <FullscreenExitOutlinedIcon className="icon " />
          </div>
          <div className="item flex items-center mr-5 relative">
            <NotificationsNoneOutlinedIcon className="icon " />
            <div className="counter w-4 h-4 bg-red-500 text-white flex rounded-full items-center justify-center text-[10px] font-bold absolute top-[-5px] right-[-5px]">1</div>
          </div>
          <div className="item flex items-center mr-5 relative">
            <ChatBubbleOutlineOutlinedIcon className="icon " />
            <div className="counter w-4 h-4 bg-red-500 text-white flex rounded-full items-center justify-center text-[10px] font-bold absolute top-[-5px] right-[-5px]">2</div>
          </div>
          <div className="item flex items-center mr-5 ">
            <ListOutlinedIcon className="icon " />
          </div>
          <div className="item flex items-center mr-5  ">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar w-8 h-8 rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar
