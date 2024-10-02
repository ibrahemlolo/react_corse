import React from "react"

export default function App() {
     const [Ibra, setIbra] = React.useState(true)
     function Taggle() {
          setIbra(prev => !prev)
          console.log(String(Ibra))
     }
     function color() {
          return Ibra ? "gold" : ""
     }
     return (
          <div style={{ fontSize: "40px", textAlign: "center" }} >
               <i className="fa-solid fa-star" onClick={Taggle} style={{ color: color() }}></i>
          </div>
     )
}