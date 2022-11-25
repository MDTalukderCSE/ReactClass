import React from 'react'
import Logo from '../img/logo192.png'


const Summation = () => {
    const a =10;
    const b =20;
    const c =a+b;
    const pi = 3.14;
    const radius = 2;
  return (
    <div>
      <h1 style={{color: "red"}}>This page is view all sumation</h1>
      <h1 style={{color: "blue"}}>This page is view all sumation</h1>
      <p>{c}</p>
      <h1>{a-b}</h1>
      <h1>{b-a}</h1>
      <h1>{a*b}</h1>
      <h1>{a/2}</h1>
      <h1>The area of circle is {pi*radius*radius}</h1>
      <img src ={Logo} />
    </div>
  )
}

export default Summation
