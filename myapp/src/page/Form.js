import React, { useState } from 'react';
import axios from 'axios';

export default function Form2() {

  const [inputs, setInputs] = useState({
    fname: '',
    address: '',
    district: 'Dhaka',
    gender: ''
  });

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setInputs(values => ({
      ...values,
      [name]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    axios.post("http://localhost/react-70/myapp/api/user_create.php", inputs)
      .then(res => {
        alert(res.data.message);
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <>
      <h1>Form</h1>

      <form onSubmit={handleSubmit}>

        Name:
        <input
          type="text"
          name="fname"
          value={inputs.fname}
          onChange={handleChange}
        />
        <br /><br />

        Address:
        <textarea
          name="address"
          value={inputs.address}
          onChange={handleChange}
        />
        <br /><br />

        District:
        <select
          name="district"
          value={inputs.district}
          onChange={handleChange}
        >
          <option value="Dhaka">Dhaka</option>
          <option value="Chittagong">Chittagong</option>
          <option value="Cumilla">Cumilla</option>
          <option value="Feni">Feni</option>
        </select>

        <br /><br />

        Gender:
        <input
          type="radio"
          name="gender"
          value="Male"
          checked={inputs.gender === "Male"}
          onChange={handleChange}
        /> Male

        <input
          type="radio"
          name="gender"
          value="Female"
          checked={inputs.gender === "Female"}
          onChange={handleChange}
        /> Female

        <br /><br />

        <button type="submit">Submit</button>

      </form>
    </>
  );
}