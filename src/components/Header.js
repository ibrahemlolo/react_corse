import { Link } from "react-router-dom"

export default function Header() {
     return (
          <nav
               style={{
                    display: "flex",
                    alignContent: "center",
                    justifyContent: "space-between",
               }}
               className="regester"
          >
               <div>
                    <button className="regester">Home</button>
                    <button className="regester">About</button>
               </div>
               <div>
                    <Link
                         to="/regester"
                         style={{ textAlign: "center" }} className="regester">
                         Regester
                    </Link>
                    <Link
                         to='/login'
                         style={{ textAlign: "center" }} className="regester">
                         login
                    </Link>
               </div>
          </nav>
     )
}