import React, { useState } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">User List</h2>
      {users.length === 0 ? (
        <p>No users yet.</p>
      ) : (
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              <strong>Name:</strong> {user.name}, <strong>Email:</strong> {user.email}, <strong>Wallet Address:</strong> {user.walletAddress}, <strong>Crop News:</strong> {user.cropNews}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserList;
