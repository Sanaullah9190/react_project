import { useState } from 'react'
import './index.css'

function App() {
  const [color , setColor] = useState('')

  return (
    <>
    <div className="container" style={{backgroundColor:color}}>
      <div className="main">
        
        <button 
        onClick={()=>setColor("red")} 
        style={{backgroundColor:"red"}}>
          Red
        </button>

        <button 
        onClick={()=>setColor("green")} 
        style={{backgroundColor:"green"}}>
          Green
        </button>

        <button 
        onClick={()=>setColor("pink")} 
        style={{backgroundColor:"pink"}}>
          Pink
        </button>

        <button 
        onClick={()=>setColor("yellow")} 
        style={{backgroundColor:"yellow"}}>
          Yellow
        </button>

        <button
        // onClick={()=>setColor("")}
        // style={{backgroundColor:"pink"}}
        >
          <input type="color"
          onChange={(e)=>setColor(e.target.value)}
          />
          
        </button>
        

      </div>
    </div>
    </>
  )
}

export default App
