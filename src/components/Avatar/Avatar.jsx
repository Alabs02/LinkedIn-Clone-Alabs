import React from 'react';

function Avatar({ size, src, rounded}) {
  return (
    <div className={`${size}  ${rounded ? 'rounded-full' : 'rounded'}`}>
        <img src={src} className="object-cover w-full h-full" alt="avatar" />
    </div>
  );
}

export default Avatar;
