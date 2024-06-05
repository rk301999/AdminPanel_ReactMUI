import React, { useState } from 'react'
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

const New = ({inputs,title}) => {
  const [file, setFile] = useState("");
  return (
    <div className='flex flex-col gap-10 p-4'>
      <div className="top text-3xl text-gray-400  h-14 shadow-lg p-2">
        <h1>{title}</h1>
      </div>
      <div className="bottom flex justify-between shadow-2xl p-2">
        <div className="left flex-1 flex justify-center mt-[100px]">
          <img src={file ? URL.createObjectURL(file) :"https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt="" className='w-44 h-44 rounded-full object-cover'/>
        </div>
        <div className="right "style={{flex:"2"}} >
        <form className='flex  flex-wrap gap-[30px] justify-around'>
              <div className="formInput w-[40%]">
                <label htmlFor="file" className='flex items-center gap-3'>
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                  className=''
                />
              </div>

              {inputs.map((input) => (
                <div className="formInput w-[40%] border-b-2 border-gray-300" key={input.id}>
                  <label className='flex items-center gap-3'>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} className='w-full p-2  border-b-3 border-gray-500'/>
                </div>
              ))}
              <button className='w-[150px] p-3 bg-teal-500 text-white font-bold cursor-pointer mt-3 mb-10'>Send</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default New
