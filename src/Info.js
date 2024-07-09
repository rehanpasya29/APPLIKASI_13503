import React from 'react';
import { useSelector } from 'react-redux';

const Info = () => {
  const name = useSelector(state => state.name);
  const nim = useSelector(state => state.nim);

  return (
    <div className="bg-white p-4 rounded shadow-md text-center">
      <p>Nama: {name}</p>
      <p>NIM: {nim}</p>
    </div>
  );
};

export default Info;
