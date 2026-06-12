import React from 'react'
import Header from '../components/Header';

export default function Distructure() {

    const rafin={
        usserName:"rafin",
        age:"25",
        inst:"isdb"
    }
    const name=['niaz','hasan','rafin'];
    let firstname=name[0]
    const [fistperson,secondperson,thirdperson]=name;
    const{name,age,inst}=rafin;
  return (
    <>
    <Header></Header>
      
    </>
  )
}

