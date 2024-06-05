import React from 'react'
import List from '../../components/table/Table'
import Charts from '../../components/charts/Charts'

const Single = () => {
  
  return (
    <div>
      <div className="top p-5 flex gap-5">
        <div className="left flex-1 shadow-lg p-5 relative">
          <div className="editButton p-[5px] text-xs text-[#7451f8] bg-[#7551f818] cursor-pointer absolute top-0 right-0 border-l-2">Edit</div>
          <h1 className="title text-xl text-gray-600 mb-5">Information</h1>
            <div className="item flex gap-5">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg w-[100px] h-[100px] rounded-full object-cover"
              />
              <div className="details flex flex-col gap-2">
                <h1 className="itemTitle mb-2 text-xl">Jane Doe</h1>
                <div className="detailItem">
                  <span className="itemKey font-bold text-gray-500 mr-[5px]">Email:</span>
                  <span className="itemValue font-light">janedoe@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey font-bold text-gray-500 mr-[5px]">Phone:</span>
                  <span className="itemValue font-light">+1 2345 67 89</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey font-bold text-gray-500 mr-[5px]">Address:</span>
                  <span className="itemValue font-light">
                    Elton St. 234 Garden Yd. NewYork
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey font-bold text-gray-500 mr-[5px]">Country:</span>
                  <span className="itemValue font-light">USA</span>
                </div>
              </div>
            </div>
        </div>
        <div className="right" style={{flex:"2"}}>
        <Charts aspect={3 / 1} title="User Spending ( Last 6 Months)" />
        </div>
      </div>
      <div className="bottom shadow-2xl p-5 mx-3 my-2">
      <h1 className="title text-xl text-gray-600 mb-5">Last Transactions</h1>
      <List/>
      </div>
    </div>
  )
}

export default Single
