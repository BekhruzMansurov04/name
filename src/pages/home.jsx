import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const name = useSelector((state) => state.name);

  const handleSave = () => {
    dispatch({ type: 'SET_NAME', payload: input });
    setInput('');
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-semibold mb-4">Ismingizni kiriting</h1>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Name: Bekhruz"
        className="border border-gray-300 p-2 rounded w-full mb-4"
      />
      <button
        onClick={handleSave}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Saqlash
      </button>

      {name && (
        <h2 className="mt-6 text-xl font-bold text-green-600">
          Salom, {name} 👋
        </h2>
      )}
    </div>
  );
};

export default Home;
