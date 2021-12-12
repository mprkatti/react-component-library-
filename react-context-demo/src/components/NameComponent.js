import React, { useContext } from 'react'
import { UserContext } from './UserContext';

const Name = () => {


  const user = useContext(UserContext);

  return (
    <div style={{ marginTop: '30px' }}>

      <h2 className="is-size-4">
        <strong>Name:</strong> : {user.name}
      </h2>
    </div>
  )
}

export default Name
