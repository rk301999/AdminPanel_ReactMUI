import React from 'react'
import { userColumns, userRows } from "../../datatabledata.jsx";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState } from "react";

const Datatable = () => {
    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
      };
    
      const actionColumn = [
        {
          field: "action",
          headerName: "Action",
          width: 200,
          renderCell: (params) => {
            return (
              <div className="cellAction flex items-center gap-4 justify-center ">
                <Link to="test" style={{ textDecoration: "none" }} className='items-center mt-[13px]'>
                  <div className="viewButton text-blue-800 bg-blue-300 rounded-xl cursor-pointer  flex items-center h-7 px-3">View</div>
                </Link>
                <div
                  className="deleteButton text-red-800 bg-red-300 rounded-xl cursor-pointer flex items-center h-7 px-3 mt-3"
                  onClick={() => handleDelete(params.row.id)}
                >
                  Delete
                </div>
              </div>
            );
          },
        },
      ];
    return (
        <div className="datatable h-[600px] p-5">
          <div className="datatableTitle w-full text-2xl text-gray-500 mb-3 flex items-center justify-between">
            Add New User
            <Link to="/users/new" className="link text-green-900 bg-green-400 text-lg font-normal px-2 py-1 rounded-2xl cursor-pointer ">
              Add New
            </Link>
          </div>
          <DataGrid
            className="datagrid"
            rows={data}
            columns={userColumns.concat(actionColumn)}
            pageSize={9}
            rowsPerPageOptions={[9]}
            checkboxSelection
          />
        </div>
      );
}

export default Datatable
