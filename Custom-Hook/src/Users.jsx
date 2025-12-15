import React, { use } from "react";
import useFetch from "./hooks/useFetch";

function Users() {
  const { data, loading, error } = useFetch(
    "http://jsonplaceholder.typicode.com/users"
  );

  if (loading) return <h1>Loading....</h1>;
  if (error) return <h1>Error occurred</h1>;

  return (
    <div>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            {user.name}
            <p>{user.email}</p>
            <p>{user.address.street}</p>
            <p>{user.address.city}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
