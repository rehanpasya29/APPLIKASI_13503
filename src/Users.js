import React, { useEffect, useState } from 'react';
import AddUserForm from './AddUserForm';

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
        setLoading(false);
      });
  }, []);

  const addUser = (user) => {
    setUsers([...users, { ...user, id: users.length + 1 }]);
  };

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="bg-white p-8 rounded shadow-md">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <AddUserForm addUser={addUser} />
      <ul>
        {users.map(user => (
          <li key={user.id} className="mb-2">
            <p className="text-lg">{user.name}</p>
            <p className="text-sm text-gray-600">{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;

