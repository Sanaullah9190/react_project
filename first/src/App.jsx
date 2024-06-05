import { useState } from 'react'
import Card from './Card'


function App() {
  let [A, setA] = useState(0)
  let [B, setB] = useState(0)
  let [C, setC] = useState(0)
  let [D, setD] = useState(0)

  const voteA = ()=>{
    A = A + 1
    setA(A)
  }
  const voteB = ()=>{
    B = B+ 1
    setB(B)
  }
  const voteC = ()=>{
    C = C + 1
    setC(C)
  }
  const voteD = ()=>{
    D = D + 1
    setD(D)
  }




  return (
    <>
      <div className="container">
        <div className="main">

          <div className="box">
            <div className='img'>
              <img src="" alt='A Party'/>
            </div>
            <div>
              <button onClick={voteA}>Vote</button>
            </div>
          </div>

          <div className="box">
            <div className='img'>
              <img src="" alt='B Party'/>
            </div>
            <div>
              <button onClick={voteB}>Vote</button>
            </div>
          </div>

          <div className="box">
            <div className='img'>
              <img src="" alt='C Party'/>
            </div>
            <div>
              <button onClick={voteC}>Vote</button>
            </div>
          </div>

          <div className="box">
            <div className='img'>
              <img src="" alt='D Party'/>
            </div>
            <div>
              <button onClick={voteD}>Vote</button>
            </div>
          </div>

        </div>
      </div>
      <h3> A Party = {A}</h3>
      <h3> B Party = {B}</h3>
      <h3> C Party = {C}</h3>
      <h3> D Party = {D}</h3>
    </>
  )
}

export default App
