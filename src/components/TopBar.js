import { NavLink } from "react-router-dom";

export default function TopBar() {
     return (<div className="d-flex topbar">
          <h1>Store</h1>
          <NavLink
               activeClassName="active"

               to='/'
               style={{ textAlign: "center", }} className="reglink"
               >
               Go to Web Site
          </NavLink>
     </div>
     )
}