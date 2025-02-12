// import { Route, Routes } from "react-router-dom"
import SideBar from "./components/SideBar"
import TopBar from "./components/TopBar"
// import Users from "./Users"
import {Outlet} from "react-router-dom"


export default function Dashboard() {
     return <>

          <TopBar />
          <div className="content-flex">
               <SideBar />
               <div style={{ width: "80% " }}>
                    <div style={{ padding: '20px' }}>
                         
                              <div><Outlet /></div>
                    </div>
                    </div>
          </div>
     </>
}