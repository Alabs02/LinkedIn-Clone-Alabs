import React from 'react';
import Avatar from '../Avatar';
import PanelBtn from '../PanelBtn';
import './Feed.css';

// Icons
import { BsImage } from 'react-icons/bs';
import { IoLogoYoutube } from 'react-icons/io';
import { BiCalendarEvent } from 'react-icons/bi';
import { AiFillLayout } from 'react-icons/ai';

function Feed() {
    return (
        <div className="w-full">
            <div className="px-4 py-2 overflow-hidden bg-white border rounded-lg panel">
                <div className="flex items-center w-full mt-1 mb-1 panel__header">
                    <div className="mr-2 panel__avatar">
                        <Avatar size={"h-12 w-12 overflow-hidden"} src="https://th.bing.com/th/id/OIP.CVqHXuBDNjoG5ZnHJzPC9AHaEK?pid=ImgDet&rs=1" rounded={true} />
                    </div>
                    <div className="grid search place-items-center">
                        <input type="text" readOnly={true} className="w-full px-4 py-3 text-base text-gray-500 border border-gray-400 outline-none cursor-pointer rounded-3xl hover:bg-gray-200 focus:bg-gray-300" placeholder="Start a post" />
                    </div>
                </div>

                <div className="flex items-center justify-between w-full panel__footer">
                    <PanelBtn Icon={BsImage} color="text-blue-400" title={"Photo"} />
                    <PanelBtn Icon={IoLogoYoutube} color="text-green-300" title={"Video"} />
                    <PanelBtn Icon={BiCalendarEvent} color="text-yellow-400" title={"Event"} />
                    <PanelBtn Icon={AiFillLayout} color="text-pink-400" title={"Write article"} />
                </div>
            </div>
            
            <div className="divider">
                <hr className="text-blue-600" />
            </div>
        </div>
    );
}

export default Feed;
