"use client";
import React from 'react'

import { FaArrowRightLong } from "react-icons/fa6";


interface ButtonProps {
  value: string;
}

const scrollHandle = () => {
  if (typeof window !== 'undefined') {
    window.scrollBy({ top: 500, behavior: 'smooth' });
  }
};

const Button: React.FC<ButtonProps> = ({ value }) => {
  return (
    <button
      type="button"
      className='lg:text-base text-sm w-fit px-3 py-2 border border-main rounded-lg button-transition flex flex-row items-center gap-3 hover:gap-4 hover:scale-105'
      onClick={scrollHandle}
    >
      <span>{value}</span>
      <FaArrowRightLong />
    </button>
  );
};

export default Button
   