import React from 'react'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa';

const WhatsappIcon = () => {
  return (
    <div className="fixed sm:bottom-24 sm:right-6 bottom-14 right-2 z-50 animate-bounce-slow">
      <Link
        href="https://wa.me/03161084712"
        className="bg-white rounded-full sm:p-2 p-1 border-2 border-green-600 flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110 hover:shadow-green-200 group"
        aria-label="Chat on WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="absolute animate-ping-slow inline-flex h-full w-full rounded-full bg-green-500 opacity-30 group-hover:opacity-50 z-0"></span>
        <FaWhatsapp className="relative z-10 sm:w-14 sm:h-14 w-10 h-10 text-green-600 group-hover:text-green-700 transition-colors duration-300" />
      </Link>
    </div>
  );
}

export default WhatsappIcon