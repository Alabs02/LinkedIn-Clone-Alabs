import React from 'react';

function PanelBtn({ Icon, color, title}) {
  return (
    <div className="flex items-center px-2 py-4 rounded cursor-pointer hover:shadow-sm hover:bg-gray-100">
        {Icon && <Icon className={`mr-3 ${color}`} fontSize="20px" />}
        <span className="text-sm font-medium tracking-wide text-gray-400">{title}</span>
    </div>
  );
}

export default PanelBtn;
