import React, { useState } from 'react'


export default function Forms() {
    //single data
//   const [name, setName] = useState('');
//   console.log(name);
//    function chnage(e){
//     setName(e.target.value)
//    }

//multiple data

   const [inputs, setInputs] = useState({});
   function handlechange(e){
    const name = e.target.name;
    const value = e.target.value;

    setInputs(values => ({...values, [name]: value}))
   }
   console.log(inputs)

  return (
    <>
      <h1>Form</h1>
      <form action="">
        Name:
  
        <input type="text" name='fullname' value={inputs.fullname} onChange={handlechange} />
         <input type="text" name='address' value={inputs.address} onChange={handlechange} />

      </form>
    </>
  )
}
