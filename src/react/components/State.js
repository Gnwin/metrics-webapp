import React from 'react';
import { useParams } from 'react-router-dom';
import Navigation from './Navigation';

const State = () => {
  const params = useParams();
  console.log(params);
  return (
    <>
      <Navigation />
      <div className="states">State Information</div>
    </>
  );
};

export default State;
