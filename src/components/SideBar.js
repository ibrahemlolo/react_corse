// import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import User from "../Pages/website/Context/Context";

export default function SideBar() {

     const userNow = useContext(User);
     console.log(userNow);
     return (<div className="sidebar">
          
          <NavLink
               activeClassName="active"
               to='/dashboard/users'
               className="item-link"
          >
               <i  className="fa-solid fa-users"></i>  Users
          </NavLink>
          <NavLink
               activeClassName="active"
               to='/dashboard/create'
               className="item-link"> 
               <i className="fa-solid fa-user-plus"></i> Create
          </NavLink>
     
     </div>)
}