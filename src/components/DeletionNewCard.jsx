import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';

const DeleteIcon = () => (
  <button className="flex items-center text-red-500 hover:text-red-700">
    <AiOutlineDelete className="mr-1" /> Delete
  </button>
);

export default DeleteIcon;
