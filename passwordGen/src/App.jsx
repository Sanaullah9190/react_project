import { useEffect, useRef, useState } from 'react';
import './index.css'
import { useCallback } from 'react';

function App() {

  const [lenght , setLength] = useState(0)
  const [CharatorAllowed , setCharatorAllowed] = useState(false)
  const [NumberAllowed , setNumberAllowed] = useState(false)
  const [Password, setPassword] = useState("")


  const PasswordGen = useCallback(()=>{

    let pass = ""
    let str = "ABCDEFGHILJKMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(NumberAllowed)str+= "0123456789"
    if(CharatorAllowed)str+= "~!@#$%^&*()_+-=/?<>{}"

    for(let i = 0; i<=lenght; i++){
      let char = Math.floor(Math.random()*str.length +1)
      pass +=str.charAt(char)

    }
    setPassword(pass)


  },[lenght,CharatorAllowed,NumberAllowed,setPassword])

  useEffect(()=>{PasswordGen()},[lenght,NumberAllowed,CharatorAllowed,PasswordGen])

  const passwordRef = useRef()

  const passwordCopy = ()=>{
    passwordRef.current?.select()
    navigator.clipboard.writeText(Password)

  }


  return (
    <>
      
      <div className="container">
        <div className="main">
          <div className='title'>
            <h2>Password Genaretor</h2>
          </div>
          
          <div className="password">
            <input type="text"
            readOnly
            value={Password}
            placeholder='password'
            ref={passwordRef}
            />
            <button onClick={passwordCopy}>Copy</button>
        </div>

        <div className="passHandler">

          <input type="range"  id="range"
          min={6}
          max={100}
          value={lenght}
          onChange={((e)=>{setLength(e.target.value)})}
          />
          <label htmlFor="range">{lenght}</label>

          <input type="checkbox" id="checkbox"
          onChange={()=>setCharatorAllowed((prev) =>!prev)}
          />
          <label htmlFor="checkbox">Charator</label>


          <input type="checkbox" id="Number"
          onChange={()=>{setNumberAllowed((prev)=>!prev)}}
          />
          <label htmlFor="Number">Number</label>

          
        </div>

        </div>
      </div>
    </>
  )
}

export default App
