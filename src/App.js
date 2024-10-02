import React from "react"

export default function App() {
     const [Ibra, setIbra] = React.useState(true)
     function Taggle() {
          setIbra(prev => !prev)
          console.log(String(Ibra))     
     }
     return (
          <div style={{ fontSize:"20px", textAlign:"center" }}>
               <h1 onClick={Taggle}>{ Ibra ? "Yes":"No" }</h1>
          </div>
     )
}