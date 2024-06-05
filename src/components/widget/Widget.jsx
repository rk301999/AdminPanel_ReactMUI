import React from 'react'
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

const Widget = ({type}) => {
    let data

    const amount = 100;
    const diff = 20
    switch (type) {
        case "user":
          data = {
            title: "USERS",
            isMoney: false,
            link: "See all users",
            icon: (
              <PersonOutlinedIcon
                className="icon self-end rounded-sm p-1"
                style={{
                  color: "crimson",
                  backgroundColor: "rgba(255, 0, 0, 0.2)",
                }}
              />
            ),
          };
          break;
        case "order":
          data = {
            title: "ORDERS",
            isMoney: false,
            link: "View all orders",
            icon: (
              <ShoppingCartOutlinedIcon
                className="icon self-end rounded-sm p-1"
                style={{
                  backgroundColor: "rgba(218, 165, 32, 0.2)",
                  color: "goldenrod",
                }}
              />
            ),
          };
          break;
        case "earning":
          data = {
            title: "EARNINGS",
            isMoney: true,
            link: "View net earnings",
            icon: (
              <MonetizationOnOutlinedIcon
                className="icon self-end rounded-sm p-1"
                style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
              />
            ),
          };
          break;
        case "balance":
          data = {
            title: "BALANCE",
            isMoney: true,
            link: "See details",
            icon: (
              <AccountBalanceWalletOutlinedIcon
                className="icon self-end rounded-sm p-1"
                style={{
                  backgroundColor: "rgba(128, 0, 128, 0.2)",
                  color: "purple",
                }}
              />
            ),
          };
          break;
        default:
        }
  return (
    <div className='flex flex-1 p-3 justify-between shadow-lg rounded-md h-28'>
      <div className="left flex flex-col justify-between">
      <span className="title font-bold text-sm text-[rgb(160,160,160)]">{data?.title}</span>
        <span className="counter text-2xl text-semibold">
        {data?.isMoney && "$"} {amount}
        </span>
        <span className="link max-w-max text-sm border-b-gray-500 border-b-2">{data?.link}</span>
      </div>
      <div className="right flex flex-col justify-between">
      <div className="percentage positive flex items-center text-sm">
          <KeyboardArrowUpIcon />
          {diff}%
        </div>
        {data?.icon}
      </div>
    </div>
  )
}

export default Widget
