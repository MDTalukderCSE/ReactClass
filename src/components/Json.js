import React from 'react'
import data from '../data/Data.json';
// console.log(data)
const Json = () => {
  return (
    <div>
      {/* <h1>Name: {data[0].name}</h1>
      <h1>Age: {data[0].age}</h1>
      <h1>Education: {data[0].education}</h1>
      <br></br>
      <br></br>
      <br></br>
      <h1>Name: {data[1].name}</h1>
      <h1>Age : {data[1].age}</h1>
      <h1>Education : {data[1].education}</h1>

      <h1>Baler jibon Sesh</h1> */}

      {
        data.map((element) => (
            <div>
                {/* {
                    (element.id == 2) ? `${element.name}`:''
                } */}
                 <h1>{element.id}</h1>
                 <h1>{element.name}</h1>
                 <h1>{element.age}</h1>
                 <h1>{element.education}</h1>
                 {
                  element.phone.map((Joshim) =>(
                    <article>
                      <h1>{Joshim.home}</h1>
                      <h1>{Joshim.office}</h1>
                    </article>
                   
                  ))
                 }
            </div>
        ))
      }


      </div>
  )
}

export default Json
