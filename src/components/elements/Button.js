import React from 'react';

export default function Button({ children, className }) {
  return (
    <div>
      <button className={` ${className} px-5 py-2 tracking-widest text-white uppercase bg-yellow-400 shadow-xl hover:bg-black`}>
        {children}
      </button>
    </div>
  );
}