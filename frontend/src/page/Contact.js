import React from 'react';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  if (!user.email) {
    toast('You have not logged in!');
    setTimeout(() => {
      navigate('/login');
    }, 10);
  }

  return (
    <div className="bg-blue-200 min-h-screen bg-opacity-30 flex justify-center items-center backdrop-blur-sm shadow-sm p-4">
      <div className="mb-80 justify-center max-w-3xl w-full lg:max-w-full lg:flex">
        <div className="h-80 bg-opacity-30 flex backdrop-blur-sm shadow-lg lg:h-auto lg:w-80 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
          <img src={user.image} alt="User" className="h-full w-full object-cover" />
        </div>
        <div className="border-r bg-blue-200 bg-opacity-30 flex backdrop-blur-sm shadow-lg border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-6 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <p className="text-2xl text-gray-600 flex items-center">
              {/* Additional greetings or messages can be inserted here */}
              Hi, {user.firstName}!
            </p>
            <div className="text-gray-900 font-bold text-2xl mb-4"></div>
            <p className="text-gray-700 py-2 text-base">
              <span className="font-bold">Name:</span> {user.firstName} {user.lastName}
            </p>
            <p className="text-gray-700 py-2 text-base">
              <span className="font-bold">Email:</span> {user.email}
            </p>
            <p className="text-gray-700 py-2 text-base">
              <span className="font-bold">Address:</span> {user.address}
            </p>
            <p className="text-gray-700 py-2 text-base">
              <span className="font-bold">Phone:</span> {user.phoneno}
            </p>
          </div>
          <div className="flex items-center">
            <img className="w-12 h-12 rounded-full mr-4" src={user.image} alt="Avatar" />
            <div className="text-sm">
              <p className="text-gray-900 leading-none">{user.firstName} {user.lastName}</p>
               {/* Replace 'Date' with actual user registration date */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
