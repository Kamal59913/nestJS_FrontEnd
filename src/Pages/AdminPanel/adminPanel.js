import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './admins.css';
import { useNavigate } from 'react-router-dom';
import { googleLogout } from '@react-oauth/google';


export default function AdminPanel() {
  const [users, setUsers] = useState([]);
  const [load, setLoad] = useState(false);
  const [secure, setSecure] = useState(false);
  const [api, setApi] = useState('');
  const objectId = "658c1ac43b9561d7d764dddb";
  const navigate = useNavigate();

  useEffect(() => {
    console.log("this right here is",localStorage.getItem('authData'),"hi this is local storage");
    if(localStorage.getItem('authData')){
      setSecure(true);
    }
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://nestjs-backend-vilx.onrender.com/api/users');
      setUsers(response.data);
      setLoad(true);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const blockUser = (userId) => {
    console.log('Block user:', userId);
    axios.put(`https://nestjs-backend-vilx.onrender.com/api/users/block/${userId}`).then((response) => {
      console.log(response);
      fetchUsers(); // Fetch users after blocking
    }).catch((err) => {
      console.log(err);
    });
  };

  const deleteUser = (userId) => {
    console.log('Delete user:', userId);
    axios.delete(`https://nestjs-backend-vilx.onrender.com/api/users/${userId}`).then((response) => {
      console.log(response);
      // Update the user list after deletion
      const updatedUsers = users.filter((user) => user.tele_id !== userId);
      setUsers(updatedUsers);
    }).catch((err) => {
      console.log(err);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newChat = {
      api: api,
    };
    axios.put(`https://nestjs-backend-vilx.onrender.com/api/updateApi/${objectId}`, newChat)
      .then((response) => {
        console.log('User registered', response.data);
        console.log("Hi", newChat.api);
      })
      .catch((error) => {
        console.error('Error registered user:', error);
      });
  };

  const handlelogout = async () => {
    await googleLogout();
    await localStorage.removeItem('authData');
    await setSecure(false);
    navigate('/');
  };

  return (
    <>
      {
          secure ? 
          (<>
                <div>

<div className='left'>
  <h1>Welcome to the Admin Panel</h1>
  {load? (<>
    <table className='table'>
    <thead>
      <tr>
        <th>Chat Id</th>
        <th>Location</th>
        <th>Username</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {users.map((user, userIndex) => (
        <tr key={userIndex}>
          <td>{user.tele_id}</td>
          <td>{user.location}</td>
          <td>{user.username}</td>
          <td>
            <button className="btn btn-danger btn-sm" type='submit' onClick={() => deleteUser(user.tele_id)}>Remove</button>
            {user.isBlocked === true ? (
              <button className="btn btn-warning btn-sm" type='submit' onClick={() => blockUser(user.tele_id)}>Unblock</button>
            ) : (
              <button className="btn btn-warning btn-sm" onClick={() => blockUser(user.tele_id)}>Block</button>
            )}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
  </>):(<>
  <h1> Loading ... </h1>
  </>)}
</div>
<div className='apiReplace'>
  <form onSubmit={handleSubmit}>
    <div className='txt_field'>
      <input
        type="text"
        name="fname"
        value={api}
        onChange={(e) => setApi(e.target.value)}
        required
      />
      <span></span>
      <label>Change it with your own API keys</label>
    </div>
    <input type="submit" className="btn btn-light" value="Send" />
  </form>
</div>
<input type="submit" className="button-logout" value="Admin Logout" onClick={handlelogout} />
                </div>
          </>):(<>
          <h6> Oops not authenticated to access this page </h6>
          </>)
        }

    </>
  );
}
