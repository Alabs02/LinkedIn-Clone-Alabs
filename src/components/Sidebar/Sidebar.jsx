import React from 'react';
import Avatar from '../Avatar';
import './Sidebar.css';

// Icons
import { BsBookmarkFill } from 'react-icons/bs';
import { HiUserGroup } from 'react-icons/hi';
import { IoIosArrowDown } from 'react-icons/io';
import { GrAdd } from 'react-icons/gr';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/user/userSlice';

function Sidebar() {
    const user = useSelector(selectUser);
    return (
        <div>
            <div className="relative w-full overflow-hidden bg-white border rounded-lg shadow-sm card">
                <div className="w-full h-16 card__media">
                    <img src="https://images.unsplash.com/photo-1470790376778-a9fbc86d70e2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=brandi-redd-aJTiW00qqtI-unsplash.jpg&w=1920" className="object-cover w-full h-full card__img" alt="cover-img" />
                </div>

                <div className="absolute card__avatar top-5">
                    <Avatar size={"h-24 w-24 overflow-hidden border-2 border-white"} src={user.photoUrl} rounded={true} />
                </div>
                <div className="grid mt-16 card__body place-items-center">
                    <h5 className="text-lg font-medium text-gray-800 transition-all cursor-pointer card__title hover:underline">{user.userName}</h5>
                    <p className="px-4 mt-2 mb-4 text-base leading-5 text-center text-gray-500 card__copy">
                        {user.email}<br />
                        One line bio.
                    </p>
                </div>

                <ul className="py-4 border-t card__section">
                    <li className="flex items-center justify-between w-full px-4 py-1.5 transition-all cursor-pointer hover:bg-gray-100">
                        <span className="text-base tracking-tight text-gray-500">Who viewed your profile</span>
                        <span className="text-base tracking-tighter text-blue-500">0</span>
                    </li>

                    <li className="flex items-center justify-between w-full px-4 py-1.5 transition-all cursor-pointer hover:bg-gray-100">
                        <span className="text-base tracking-tight text-gray-500">Views of your post</span>
                        <span className="text-base tracking-tighter text-blue-500">0</span>
                    </li>
                </ul>

                <div className="px-4 py-4 transition-all border-t border-b cursor-pointer card__section hover:bg-gray-100">
                    <p className="text-sm text-gray-400">Access exclusive tools & insights</p>
                    <div className="flex items-center">
                        <div className="h-5 mr-2 overflow-hidden bg-yellow-500 border border-yellow-500 rounded card__badge">
                            <img src="/assets/images/gold.svg" className="object-cover w-full h-full" alt="badge" />
                        </div>
                        <span className="text-sm font-medium tracking-wide text-gray-900">Try Premium for free</span>
                    </div>
                </div>

                <ul className="px-4 py-3.5 transition-all cursor-pointer hover:bg-gray-100">
                    <li className="flex items-center">
                        <BsBookmarkFill className="mr-2 text-gray-500" fontSize="23px" />
                        <span className="text-base font-medium text-gray-500">My items</span>   
                    </li> 
                </ul>
            </div>

            <div className="pt-6 mt-2 mb-4 bg-white border rounded-lg shadow-sm">
                <p className="px-4 text-sm font-normal text-gray-800">Recent</p>

                <ul className="mt-4 list">
                    <li className="flex items-end w-full px-4 py-1.5 cursor-pointer hover:bg-gray-100">
                        <HiUserGroup className="mr-2 text-gray-500" size="22" />
                        <span className="overflow-hidden text-sm text-gray-500 overflow-ellipsis">Ethereum.</span>
                    </li>

                    <li className="flex items-end w-full px-4 py-1.5 cursor-pointer hover:bg-gray-100">
                        <HiUserGroup className="mr-2 text-gray-500" size="22" />
                        <span className="overflow-hidden text-sm text-gray-500 overflow-ellipsis">Ethereum.</span>
                    </li>

                    <li className="flex items-end w-full px-4 py-1.5 cursor-pointer hover:bg-gray-100">
                        <HiUserGroup className="mr-2 text-gray-500" size="22" />
                        <span className="overflow-hidden text-sm text-gray-500 overflow-ellipsis">Ethereum.</span>
                    </li>
                    
                    <li className="flex items-end w-full px-4 py-1.5 cursor-pointer hover:bg-gray-100">
                        <HiUserGroup className="mr-2 text-gray-500" size="22" />
                        <span className="overflow-hidden text-sm text-gray-500 overflow-ellipsis">Ethereum.</span>
                    </li>
                </ul>

                <p className="px-4 mt-8 mb-4 text-sm font-semibold tracking-wide text-blue-500 transition-all cursor-pointer hover:underline">Groups</p>
                <ul className="mt-4 list">
                    <li className="flex items-end w-full px-4 py-1.5 cursor-pointer hover:bg-gray-100">
                        <HiUserGroup className="mr-2 text-gray-500" size="22" />
                        <span className="overflow-hidden text-sm text-gray-500 overflow-ellipsis">Ethereum.</span>
                    </li>

                    <li className="flex items-end w-full px-4 py-1.5 cursor-pointer hover:bg-gray-100">
                        <HiUserGroup className="mr-2 text-gray-500" size="22" />
                        <span className="overflow-hidden text-sm text-gray-500 overflow-ellipsis">Ethereum.</span>
                    </li>

                    <li className="flex items-end w-full px-4 py-1.5 cursor-pointer hover:bg-gray-100">
                        <HiUserGroup className="mr-2 text-gray-500" size="22" />
                        <span className="overflow-hidden text-sm text-gray-500 overflow-ellipsis">Ethereum.</span>
                    </li>
                    
                    <li className="flex items-end w-full px-4 py-1.5 cursor-pointer hover:bg-gray-100">
                        <HiUserGroup className="mr-2 text-gray-500" size="22" />
                        <span className="overflow-hidden text-sm text-gray-500 overflow-ellipsis">Ethereum.</span>
                    </li>
                    <li className="flex items-center justify-center w-full py-1 text-gray-500 transition-all cursor-pointer hover:text-gray-800 cursot-pointer hover:bg-gray-100">
                        <span className="mr-2 text-sm">Show more</span>
                        <IoIosArrowDown />
                    </li>
                </ul>

                <div className="flex items-end justify-between px-4 mt-6 mb-4">
                    <p className="text-sm font-semibold tracking-wide text-blue-500 transition-all cursor-pointer hover:underline">Events</p>
                    <div className="p-1.5 grid place-items-center hover:bg-gray-100 rounded-full transition-colors cursor-pointer">
                        <GrAdd className="text-blue-500" size="18px" />
                    </div>
                </div>

                <ul className="mb-1 list">
                    <li className="px-4 text-sm font-medium text-blue-500 transition-all hover:underline">
                        Followed Hashtags
                    </li>
                </ul>

                <ul className="px-4 pt-3.5 pb-3 border-t transition-all cursor-pointer hover:bg-gray-100">
                    <li className="flex justify-center">
                        <span className="text-base font-medium text-gray-500">Discover more</span>   
                    </li> 
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
