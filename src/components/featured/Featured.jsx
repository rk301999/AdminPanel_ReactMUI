import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import { CircularProgressbar,buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

const Featured = () => {
  return (
    <div className="featured shadow-lg p-3" style={{ flex: "2" }}>
      <div className="top flex items-center justify-between text-gray-500">
        <h1 className="title text-sm font-semibold">Total Revenue</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom p-5 flex flex-col items-center justify-center gap-4">
        <div className="featuredChart w-24 h-24">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5}  styles={buildStyles({
          pathColor: "green",
        })} />
        </div>
        <p className="title font-semibold text-gray-500">Total sales made today</p>
        <p className="amount text-2xl">$420</p>
        <p className="desc font-light text-sm text-gray-500 text-center">
          Previous transactions processing. Last payments may not be included.
        </p>
        <div className="summary w-full flex items-center justify-between">
          <div className="item text-center">
            <div className="itemTitle text-sm text-gray-500">Target</div>
            <div className="itemResult text-red-600 flex items-center mt-3 text-sm">
              <KeyboardArrowDownIcon fontSize="small" />
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
          <div className="item text-center">
            <div className="itemTitle  text-sm text-gray-500">Last Week</div>
            <div className="itemResult positive text-green-700 flex items-center mt-3 text-sm">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
          <div className="item text-center">
            <div className="itemTitle  text-sm text-gray-500">Last Month</div>
            <div className="itemResult positive text-green-700 flex items-center mt-3 text-sm">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
