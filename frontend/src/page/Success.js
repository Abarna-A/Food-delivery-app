import React from 'react';

const Success = () => {
  // Generating a random number between 15 and 35 for minRange
  const minRange = Math.floor(Math.random() * (35 - 15 + 1)) + 15;

  // Generating a random number between 45 and 50 for maxRange
  const maxRange = Math.floor(Math.random() * (50 - 45 + 1)) + 45;

  // Generating a random number between minRange and maxRange
  const randomNumber = Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;

  return (
    <div className='bg-blue-200 min-h-screen flex bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 justify-center items-center'>
      <div className='bg-green-300 p-8 rounded-md text-center'>
        <h2 className='text-2xl font-bold mb-4'>Payment is Successful</h2>
        <div className='text-black'>
          <h3>
            Your ordered food will be delivered in {minRange} - {maxRange} min
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Success;
