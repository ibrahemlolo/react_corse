import { Link } from "react-router-dom";

export default function SideBar() {
     return (<div className="sidebar">
          
          <Link
               to='/dashboard/users'
               className="item-link"
          >
               Users
          </Link>
     
     </div>)
}