import React from 'react';

const Card = ({ name, car }) => {
  return (
    <div className="bg-[#ffffff] rounded-xl shadow-xl min-h-[100px] min-w-[200px] flex flex-col items-center justify-center mt-4">
      <h2>Hola, {name}!</h2>
      <h3>Tu auto es: {car}</h3>
    </div>
  );
};

export default Card;
