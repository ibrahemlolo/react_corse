import SignUp from "./components/SignUp"
import Login from "./components/Login"
import Home from "./components/Home"
import Header from "./components/Header"
// import { useEffect, useState } from "react"
// import Name from "./components/Name"
import { Route, Routes } from "react-router-dom"


export default function App() {



   return (
      <div>
      
         <Header />
         
         <Routes> 
            <Route path='/' element={<Home/>}  /> 
            <Route path='/regester' element={<SignUp/>}  />
            <Route path='/login' element={<Login/>}  />
         </Routes> 
           
      </div>)


}







   // const [data, setData] = useState([])
   // useEffect(() => {
   //    fetch("https://api.imgflip.com/get_memes")
   //       .then((res) => res.json())
   //       .then((data) => setData(data.data.memes.map((items) => items))
   //       )
   // })
   // const datashow = data.map((item, index) => <Name key={index} index={index} name={item.name} img={item.url} />)
