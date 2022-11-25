import React from 'react'

const AppTwo = () => {

const data =[
    "Asif","Jasim","Yeasin Pagla","Nirmol"
];


const colleges = ['BNC','SBPGC','NDC','BAF'];
// clooege[0]
// clooege[1]
// clooege[2]
// clooege[3]
const collegeName = colleges.map((college) => <h1>{college}</h1>)

const item = data.map((i) => <h1>{i}</h1>)

const schools = ['a','b','c']; 
const name = schools.map((school) => <h1>{school}</h1>)

  return (
    <div>
      <h1>{data[0]}</h1>
      <h1>{data[1]}</h1>
      <h1>{data[2]}</h1>
      <h1>{data[3]}</h1>
      <h1 style={{color:"red"}}>Another</h1>
     
     {item}
    
    {collegeName}
    {name}
    </div>
  )
}

export default AppTwo
