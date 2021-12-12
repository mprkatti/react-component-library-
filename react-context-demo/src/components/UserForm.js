import React, { useContext } from 'react';

import { UserContext } from './UserContext';


const UserForm = () => {

  const user = useContext(UserContext);

  return (
    <div className="user-form">
      <div className="input-item">
        <label className="label"> update name:</label>
        <input type="text" className="input"
          onChange={e => user.setName(e.target.value)}
          value={user.name}
          name="name"
        />
      </div>
      <div className="input-item">
        <label className="label"> update location:</label>
        <input type="text" className="input"
          onChange={e => user.setLocation(e.target.value)}
          value={user.location} name="location"
        />
      </div>


    </div>
  )
}

export default UserForm

