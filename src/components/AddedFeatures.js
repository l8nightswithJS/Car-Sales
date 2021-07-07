import React from 'react';

import AddedFeature from './AddedFeature';
//changed props to actual names in object
const AddedFeatures = ({car, removeFeature}) => {
  
  return (
    <div className="content">
      <h6>Added features:</h6>
      {car.features.length ? (
        <ol type="1">
          {car.features.map(item => (
            <AddedFeature removeFeature={removeFeature} key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

export default AddedFeatures;
