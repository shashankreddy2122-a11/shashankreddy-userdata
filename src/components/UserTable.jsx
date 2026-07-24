import { useState, useEffect } from "react";

function UserTable() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Unable to fetch user data. Please try again.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h2 className="text-2xl font-semibold text-blue-600">
          Loading Users...
        </h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h2 className="text-2xl font-semibold text-red-600">{error}</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-700">
        User Details
      </h1>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 bg-white shadow-lg rounded-lg">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="border px-4 py-3">ID</th>
              <th className="border px-4 py-3">Name</th>
              <th className="border px-4 py-3">Username</th>
              <th className="border px-4 py-3">Email</th>
              <th className="border px-4 py-3">City</th>
              <th className="border px-4 py-3">Street</th>
              <th className="border px-4 py-3">Zipcode</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="bg-gray-50"
              >
                <td className="border px-4 py-3 text-center">{user.id}</td>
                <td className="border px-4 py-3">{user.name}</td>
                <td className="border px-4 py-3">{user.username}</td>
                <td className="border px-4 py-3">{user.email}</td>
                <td className="border px-4 py-3">{user.address.city}</td>
                <td className="border px-4 py-3">{user.address.street}</td>
                <td className="border px-4 py-3">{user.address.zipcode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserTable;