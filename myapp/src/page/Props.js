import React from 'react'

export default function Props() {

    const person ={
        name :"Niaz Hasan Rafin",
        age : 50,
        addess :"mirpur"

    }
  return (
    <>
    <h1>Props</h1>
    Name : {person.name}<br/>
    Age : {person.age}
      
    </>
  )
}
