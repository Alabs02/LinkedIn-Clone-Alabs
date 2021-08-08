import React from 'react';
import './IconBtn.css';

function IconBtn({ Icon, id, copy }) {
  return (
    <div id={id} data-copy={copy} className="relative p-2 transition-colors rounded-full cursor-pointer hover:bg-gray-200 icon-btn">
        { Icon && <Icon className="text-gray-700" size="21px" /> }
    </div>
  );
}

export default IconBtn;
