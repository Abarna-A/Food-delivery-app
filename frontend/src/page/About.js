import React from 'react';

const About = () => {
  const redirectToMail = (email) => {
    window.location.href = `mailto:${email}`;
  };

  const redirectToPhone = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="flex flex-col bg-blue-200 min-h-screen bg-opacity-30 justify-center items-center backdrop-blur-sm">
      <div className="w-1/3 p-4 justify-center m-2 bg-blue-200 bg-opacity-30 backdrop-filter backdrop-blur-sm rounded-md">
        <h1 className="text-3xl font-bold mb-4 text-center">BOLT FOOD</h1>
        <section className="text-center mb-4">
          <h2 className="text-lg font-bold mb-2">About</h2>
          <div className="mb-2">
            <p>
              Bolt Foods is a renowned restaurant situated in Sai Karan Nagar, Singanallur, Coimbatore.
              Our dedication lies in delivering exquisite meals within a 30km radius, ensuring swift and timely delivery.
            </p>
          </div>
        </section>
      </div>
      <div className="w-1/3 p-4 m-2 bg-blue-200 bg-opacity-30 backdrop-filter backdrop-blur-sm rounded-md">
        <section className="text-center mb-4">
          <h2 className="text-lg font-bold mb-2">Contact</h2>
          <p className="mb-2">Email:</p>
          <ul className="list-disc list-inside mb-2">
            <li>
              <span className="text-blue-500 cursor-pointer" onClick={() => redirectToMail('abarnaananthan17@gmail.com')}>abarnaananthan@gmail.com</span>
            </li>
            <li>
              <span className="text-blue-500 cursor-pointer" onClick={() => redirectToMail('nikitta2411@gmail.com')}>nikitta2411@gmail.com</span>
            </li>
          </ul>
          <p className="mb-2">Mobile:</p>
          <ul className="list-disc list-inside mb-2">
            <li>
              <span className="text-blue-500 cursor-pointer" onClick={() => redirectToPhone('+91 8870416782')}>+91 8870416700</span>
            </li>
            <li>
              <span className="text-blue-500 cursor-pointer" onClick={() => redirectToPhone('+91 9043045347')}>+91 9043045347</span>
            </li>
          </ul>
          <p className="text-center mt-2 text-left">
            Address : Bolt Foods, Sai Karan Nagar, Singanallur, Coimbatore
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
