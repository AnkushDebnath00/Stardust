import React from "react";
import "./rightheader.css";

const Rightheader = () => {
  return (
    <div className="rightheader">
      <div className="right_nav"></div>

      <div className="mid">
        <div className="nav_btn active">
          <a href="#popular">Popular</a>
        </div>
        <div className="nav_btn active">
          <a href={`#upcoming`}>Upcoming</a>
        </div>
        <div className="nav_btn active">
          <a href="#top_rated">Top Rated</a>
        </div>
      </div>
    </div>
  );
};

export default Rightheader;
