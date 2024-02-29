import React, { useState } from 'react';
import Card from './Card';

const Form = () => {
  const [name, setName] = useState('');
  const [car, setCar] = useState('');
  const [errors, setErrors] = useState(false);
  const [card, setCard] = useState(false);

  const captureName = (e) => {
    setName(e.target.value);
  };

  const captureCar = (e) => {
    setCar(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let hasErrors = false;

    if (name === '' || name.length < 3 || name[0] === ' ') {
      hasErrors = true;
    }

    if (car === '' || car.length < 6) {
      hasErrors = true;
    }

    setErrors(hasErrors);
    console.log(hasErrors);

    if (!hasErrors) {
      console.log(name, car);
      setCard(true);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center border border-[#DADADA] bg-[#FFFFFF] shadow-2xl rounded-xl min-h-[300px] min-w-[300px]">
        <h2 className="text-xl mb-4 font-bold">Parcial Front</h2>
        <form
          onSubmit={handleSubmit}
          action="submit"
          className="flex flex-col w-full"
        >
          <div className="w-full flex items-center justify-center">
            <input
              className="border border-black my-4"
              placeholder="Nombre"
              type="text"
              name="nombre"
              value={name}
              onChange={captureName}
            />
          </div>

          <div className="w-full flex items-center justify-center">
            <input
              className="border border-black my-4"
              placeholder="Marca de Auto"
              type="text"
              name="auto"
              value={car}
              onChange={captureCar}
            />
          </div>
          <div className="flex items-center justify-center">
            <button className="border border-green-500 uppercase min-w-[100px] rounded-xl p-1 mt-8 hover:bg-green-500 hover:font-medium">
              Submit
            </button>
          </div>
          {errors && (
            <div className="flex justify-center mt-3">
              <span className="text-red-600 text-xs">
                Por favor chequea que la información sea correcta
              </span>
            </div>
          )}
        </form>
      </div>
      {card && <Card name={name} car={car} />}
    </>
  );
};

export default Form;
