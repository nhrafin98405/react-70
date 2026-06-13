import React, { useEffect, useState } from 'react'
import axios from 'axios'




export default function UserList() {
   const [user, setUsers] = useState([]);

   useEffect(() => {

   axios.post("http://localhost/rafin/react-70/app1/api/user_list.php")
      .then(res => {setUsers(res.data)});
},[]);
      console.log(user);
  return (
    <>
        <h1>userlist</h1>

        <ul>
            {user.map((user)=> (
                <li key={user.id}>

                    <p className="text-lg font-semibolod">

                        Id:{user.id} <br />
                        Name:{user.name} <br />
                        District:{user.dirtrict} <br />
                        Address:{user.address} <br />
                    </p>



                </li>
            ))}

        </ul>

       


    </>
  )
}
