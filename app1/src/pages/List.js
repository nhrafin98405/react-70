import React from 'react'

export default function List() {
    const cars = ['Apple', 'Jackfruits', 'Banana']
  return (
    <div>
      <h1>List</h1>
      <ul>
        {
            cars.map((car) => <li>I am a { car }</li>)
        }
      </ul>
    </div>
  )
}
