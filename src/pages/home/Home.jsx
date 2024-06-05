import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Widget from '../../components/widget/Widget'
import Featured from '../../components/featured/Featured'
import Charts from '../../components/charts/Charts'
import Table from '../../components/table/Table'

const Home = () => {
  return (
    <div className='flex'>
      <Sidebar className='grow'/>
      <div className='container ' style={{flex:"6"}}>
        <Navbar/>
        <div className="widgets flex gap-5 p-5">
          <Widget type="user"/>
          <Widget type="order"/>
          <Widget type="earning"/>
          <Widget type="balance"/>
        </div>
        <div className="charts flex gap-5 px-5 py-1">
          <Featured />
          {/* if aspect is 2/1 then if width is  100 then height is 50  */}
          <Charts title="Last 6 Months (Revenue)" aspect={2 / 1}/> 
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  )
}

export default Home
