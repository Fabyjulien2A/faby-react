import React from 'react';



export default function Button({ children, className, color, theme }) {

let background

if (color === 'black') {background = 'bg-black'}
else if (color === 'danger') {background = 'bg-red-500'}
else {background = 'bg-yellow-400 '}

  switch(theme){
    case 'small':
      return (
        <div>
          <button className={`${className} ${background} px-4 py-2 uppercase shadow-xl text-white text-xs font-medium animate`}>
            {children}
          </button>
        </div>
      );

    case 'big':
      return (
        <div>
          <button className={`${className} ${background} px-8 py-4 uppercase shadow-xl text-white text-base font-medium animate`}>
            {children}
          </button>
        </div>
      );

    default:
      return (
        <div>
          <button className={`${className} ${background} px-4 py-3 uppercase shadow-xl text-white text-xs font-medium animate`}>
            {children}
          </button>
        </div>
      );
  }
}
