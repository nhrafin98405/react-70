import React from 'react'

export default function Props() {

    const person = {
        name:"Tanjil Hossain", 
        age: 23,
        address: "Mirpur"
    }
    //distructuring
    const {name, age, address}=person
  return (
    <>
      <h1>This is my props</h1>
      <p>
        Name: {person.name} <br />
        Age: {person.age} <br />
        Address: {person.address}
      </p>
      <h1>
        Destructuring Output
      </h1>
      <p>
        Name:{name}

      </p>
    </>
  )
}
