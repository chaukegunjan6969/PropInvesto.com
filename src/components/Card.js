import React from 'react';

const Card = ({ image, name, location, ownerName, price }) => {
  return (
    <div className="bg-white shadow-lg  overflow-hidden flex flex-col lg:flex-row p-4 m-4 rounded-3xl ">
      <div className="lg:w-1/2 ">
        <img
          src={image}
          alt={name}
          className="w-full h-auto lg:h-full lg:w-auto object-cover"
        />
      </div>
      <div className="lg:w-1/2 p-4">
        <h2 className="text-2xl font-semibold mb-2">{name}</h2>
        <p className="text-gray-600 mb-2">Location: {location}</p>
        <p className="text-gray-600 mb-2">Owner's Name: {ownerName}</p>
        <p className="text-xl font-bold text-indigo-600 mb-4">Price: ${price}</p>
        <button className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition duration-300 ease-in-out">
          View More
        </button>
      </div>
    </div>
  );
};

export default Card;
