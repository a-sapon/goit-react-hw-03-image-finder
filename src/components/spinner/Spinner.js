import React from 'react';
import Loader from 'react-loader-spinner';

const Spinner = () => (
  <>
    <Loader
      type='Plane'
      color='#3f51b5'
      height={100}
      width={100}
      timeout={3000} //3 secs
    />
  </>
);

export default Spinner;