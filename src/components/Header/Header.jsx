import React from 'react';
import './Header.css';
import HeaderBtn from '../HeaderBtn';

// Icons
import { ImSearch } from 'react-icons/im'
import { ImHome3 } from 'react-icons/im'
import { MdGroup } from 'react-icons/md';
import { HiBriefcase } from 'react-icons/hi'
import { AiFillMessage } from 'react-icons/ai';
import { FaBell } from 'react-icons/fa';
import { GrApps } from 'react-icons/gr';

function Header() {
  return (
    <div className="flex items-end justify-between px-6 bg-white border header">
        <div className="flex py-2 header__leading">
			<div className="mr-3 header__media">
				<img src="/assets/icons/linkedin.svg" className="h-10" alt="logo" />
			</div>

			<div className="relative rounded search">
				<input type="text" placeholder="Search" className="h-full pl-10 pr-2 font-light text-gray-700 transition-all border-0 rounded outline-none bg-blue-50 search__input hover:shadow-sm w-80" />
				<ImSearch className="absolute text-gray-600 top-3 left-4" fontSize="16px" />
			</div>
		</div>

		<div className="flex items-center overflow-hidden header__main">
			{/* <div className="grid px-6 border-b-2 border-gray-900 cursor-pointer nav place-items-center">
				<ImHome3 className="text-gray-900" fontSize="25px" />
				<p className="mt-.5 m-0 text-sm tracking-wide text-900">Home</p>
			</div> */}
			<HeaderBtn Icon={ImHome3} title="Home" />				
			<HeaderBtn Icon={MdGroup} title="My Network" />
			<HeaderBtn Icon={HiBriefcase} title="Jobs" />
			<HeaderBtn Icon={AiFillMessage} title="Messaging" />
			<HeaderBtn Icon={FaBell} title="Notifications" />
			<HeaderBtn avatar="https://th.bing.com/th/id/OIP.CVqHXuBDNjoG5ZnHJzPC9AHaEK?pid=ImgDet&rs=1" title="Me" />
			
			<div className="flex items-center pl-2 ml-2 border-l header__actions">
				<HeaderBtn Icon={GrApps} title="Work" />
				<a href="£!" className="pl-2 text-sm text-center text-yellow-600 transition-all hover:text-yellow-900 hover:underline">Try Premium for <br/>free</a>
			</div>
		</div>
    </div>
  );
}

export default Header;
