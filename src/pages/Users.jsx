import { Link, useParams } from "react-router-dom"
import React, { useEffect, useState } from "react"
import axios from "axios";
function Users() {
    const { id } = useParams()
    const [user, setUser] = useState({})
     



    async function fetchUser() {
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        setUser(data);
        }    

useEffect(() => { 
 fetchUser()
  }, []);

    return (
    <div>
    <Link to="/">Back</Link>  
    <p>{user.id}</p>
    <p>{user.name}</p>
    <p>{user.email}</p>
    <p>{user.username}</p>
    </div>
    
    

)
}
export default Users





// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";

// function Users() {
//   const { id } = useParams();
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     async function fetchUser() {
//       const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
//       setUser(data);
//       console.log(data); // Optional: log result
//     }

//     fetchUser();
//   }, [id]);

//   if (!user) return <h1>Loading...</h1>;

//   return (
//     <div>
//       <h1>{user.name}</h1>
//       <p>Email: {user.email}</p>
//       <p>Username: {user.username}</p>
//     </div>
//   );
// }

// export default Users;
