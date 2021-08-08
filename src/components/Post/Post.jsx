import React from 'react';
import Avatar from '../Avatar';
import PanelBtn from '../PanelBtn';
import './Post.css';

// Icons
import { FaThumbsUp, FaGlobeAmericas } from 'react-icons/fa';
import { FiThumbsUp } from 'react-icons/fi';
import { AiOutlineComment, AiTwotoneHeart } from 'react-icons/ai';
import { IoReturnUpForwardOutline } from 'react-icons/io5';
import { RiSendPlaneFill, RiMoreFill } from 'react-icons/ri';
import { GrEmoji } from 'react-icons/gr';
import { BsImage, BsDot } from 'react-icons/bs';

function Post({name, description, message}) {
  return (
    <div>
      <div className="p-4 mb-2 bg-white rounded-md card">
        <div className="flex items-start justify-between card__header">
          <div className="flex items-center">
            <div className="m-0 mr-2">
              <Avatar size={"h-14 w-14 overflow-hidden"} src="https://th.bing.com/th/id/OIP.CVqHXuBDNjoG5ZnHJzPC9AHaEK?pid=ImgDet&rs=1" rounded={true} />
            </div>

            <div>
              <h5 className="m-0 text-sm font-medium tracking-wide text-gray-700"><span className="cursor-pointer hover:text-blue-600 hover:underline">{ name } </span>. <span className="text-sm font-light text-gray-500">Following</span></h5>
              <p className="text-xs font-light tracking-wide text-gray-500">{`${description}...`}</p>
              <small className="flex items-center text-xs font-light text-gray-500 mt-0.5">11h <BsDot/> <span>Edited</span> <BsDot/> <FaGlobeAmericas /> </small>
            </div>
          </div>
          
          <div className="p-1 transition-colors rounded-full cursor-pointer hover:bg-gray-100">
            <RiMoreFill className="text-gray-500" size="22px" />
          </div>
        </div>

        <div className="card__content">
          <p className="py-2.5 font-light text-sm text-gray-900 tracking-wide">{ message }</p>
        </div>

        <div className="flex items-center card__section">
          <div className="p-1 mr-1 bg-blue-500 rounded-full cursor-pointer">
            <FaThumbsUp className="text-white" size="8px" />
          </div>
          
          <div className="p-1 mr-1 bg-yellow-600 rounded-full cursor-pointer">
            <AiTwotoneHeart className="text-white" size="8px" />
          </div>
          
          <span className="mr-1 text-xs font-light text-gray-500 cursor-pointer hover:text-blue-600 hover:underline">522</span>

          <BsDot className="mr-1 text-gray-500" size="8px" />

          <span className="text-xs font-light tracking-wide text-gray-500 cursor-pointer hover:text-blue-600 hover:underline">13 comments</span>
        </div>
        <hr className="m-0 mt-2" />

        <div className="flex items-center my-3">
          <PanelBtn Icon={FiThumbsUp} title={"Like"} color={"text-gray-600"} />
          <PanelBtn Icon={AiOutlineComment} title={"Comment"} color={"text-gray-600"} />
          <PanelBtn Icon={IoReturnUpForwardOutline} title={"Share"} color={"text-gray-600"} />
          <PanelBtn Icon={RiSendPlaneFill} title={"Send"} color={"text-gray-600"} />
        </div>
        
        <div className="flex w-full card__footer item-center">
          <div className="mr-1 footer__avatar">
            <Avatar size={"h-10 w-10 overflow-hidden"} src="https://th.bing.com/th/id/OIP.CVqHXuBDNjoG5ZnHJzPC9AHaEK?pid=ImgDet&rs=1" rounded={true} />
          </div>
          
          <div className="relative search">
            <input type="text" placeholder="Add a comment..." className="w-full h-full py-2 pl-2 pr-20 text-sm font-light tracking-wide text-gray-700 border border-gray-300 outline-none rounded-3xl focus-within::border-2" />

            <div className="absolute p-1.5 hover:bg-gray-200 rounded-full search__btn grid place-items-center">
              <GrEmoji className="text-gray-700" size="23px" />
            </div>

            <div className="absolute grid rounded-full hover:bg-gray-200 search__btn place-items-center">
              <BsImage className="text-gray-700" size="20px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
