import React, { useEffect, useState } from 'react';

const MyComponent = () => {
  const [users, setUsers] = useState([]);
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://reqres.in/api/users?delay=3');
        const jsonData = await response.json();
        setUsers(jsonData.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    const fetchData = async () => {
      try {
        const response = await fetch('https://reqres.in/');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchUsers();
    fetchData();
  }, []);

  return (
    <div>
      <h1>API Fetch</h1>
      <h2>Datos del enlace: {data.url}</h2>
      <p>Texto del enlace: {data.text}</p>
      <h3>Lista de usuarios</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.first_name} {user.last_name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;