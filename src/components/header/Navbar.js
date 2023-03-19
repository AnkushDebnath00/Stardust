import React, { useState } from "react";
import "./navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Rightheader from "./Rightheader";
import LogoutIcon from "@mui/icons-material/Logout";
import logo from "../header/logo.png";

const Navbar = () => {
  const history = useNavigate();

  const [dropen, setDropen] = useState(false);
  const handleopen = () => {
    setDropen(true);
  };
  const handledeclose = () => {
    setDropen(false);
  };

  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const searchQuery = () => {
    // console.log(query);
    if (query) {
      setQuery("");
      history(`/movies/${query}`);
    }
  };

  return (
    <header>
      <nav>
        <div className="left">
          <IconButton className="hamburgur" onClick={handleopen}>
            <MenuIcon style={{ color: "#fff" }} />
          </IconButton>

          <Drawer open={dropen} onClose={handledeclose}>
            <Rightheader logclose={handledeclose} />
          </Drawer>

          <div className="navlogo">
            <NavLink to="/">
              <img id="logoimg" className="logoimg" src={logo} alt="logo" />
            </NavLink>
          </div>
        </div>
        <div className="mid">
          <div className="nav_btn hideAtMobile">
            <a href="#popular">Popular</a>
          </div>
          <div className="nav_btn hideAtMobile">
            <a href={`#upcoming`}>Upcoming</a>
          </div>
          <div className="nav_btn hideAtMobile">
            <a href="#top_rated">Top Rated</a>
          </div>
        </div>
        {/* <div className=''> */}
        {/* <div className='nav_searchbaar right'> */}
        <form
          className="nav_searchbaar right"
          onClick={(e) => e.preventDefault()}
        >
          <input
            type="text"
            name="query"
            id="query"
            value={query}
            onChange={handleChange}
            autoComplete="false"
            placeholder="Search here..."
          />

          <button type="submit" className="search_icon" onClick={searchQuery}>
            <SearchIcon id="search" />
          </button>
        </form>
        {/* </div> */}
      </nav>
    </header>
  );
};

export default Navbar;
