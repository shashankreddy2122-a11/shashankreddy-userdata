import { useState, useEffect } from "react";

function UserTable() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
       .then((response) => response.json())
       .then((data) => {
        setUsers(data);
    });
},[]);
return (
  <div>
    <h1>User Details</h1>
     <div className="table-container">
    <table border="1">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>City</th>
                <th>Street</th>
                <th>Zipcode</th>
            </tr>
        </thead>
        <tbody>
            {users.map((user) => (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.address.city}</td>
                    <td>{user.address.street}</td>
                    <td>{user.address.zipcode}</td>
                </tr>
            ))} 
        </tbody>
    </table>
    </div>
  </div>
);

}

export default UserTable;