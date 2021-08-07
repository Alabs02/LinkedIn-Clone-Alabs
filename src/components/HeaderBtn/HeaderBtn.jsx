import React from 'react';
import Avatar from '../Avatar';

function HeaderBtn({Icon, avatar, title}) {
  return (
    <div className="grid self-center px-4 pb-1 text-gray-500 transition-colors cursor-pointer nav place-items-center hover:text-gray-900">
        { Icon && <Icon fontSize="25px" /> }
        { avatar && <Avatar size={"h-7 w-7 overflow-hidden"} src={avatar} rounded={true} />}
        <p className="mt-.5 m-0 text-sm tracking-wide">{ title }</p>
    </div>
  );
}

export default HeaderBtn;
