import React, { useDebugValue, useEffect, useState } from "react";
import axios from "axios";
import Users from "./Users.jsx";
import User from "../components/User.jsx";
import { Link } from "react-router-dom";



function Home() {
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsers(data);
    console.log(data);
  }

  useEffect(() => {
    setTimeout(() => {
      fetchUsers();
    }, 2000);
  }, []);




function renderUsers(){
  return users.map((user) => (
        <Link to={`/users/${user.id}`}key={user.id}>  
        <User
          
          id={user.id}
          name={user.name}
          email={user.email}
          username={user.username}
        ></User>
       </Link>
      ))


}


  return (
    <div>
      {users.length ? renderUsers() : <h1>Loading...</h1>}
            </div>

  );
}
export default Home;
