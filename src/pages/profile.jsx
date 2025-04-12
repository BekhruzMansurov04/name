import React from 'react';
import { useSelector } from 'react-redux';

export const Profile = () => {
  const name = useSelector((state) => state.name);

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-semibold mb-4">Profil</h1>
        <p className="text-lg">Foydalanuvchi ismi: <span className="font-bold">{name}</span></p>
    </div>
  );
};

export default Profile;
