import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const LocationComponent = () => {

  const user = useContext(UserContext);

  return (
    <div>
      <h2 className="is-size-4">
        <strong>Location:</strong> {user.location}
      </h2>
    </div>
  )

}

export default LocationComponent
