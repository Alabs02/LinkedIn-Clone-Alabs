import React, { useState, useEffect } from 'react';
import Avatar from '../Avatar';
import PanelBtn from '../PanelBtn';
import Post from '../Post';
import Modal from '../Modal';
import IconBtn from '../IconBtn';
import './Feed.css';

// Icons
import { BsImage, BsCardImage } from 'react-icons/bs';
import { BiCalendarEvent } from 'react-icons/bi';
import { CgClose } from 'react-icons/cg';
import { FaGlobeAmericas } from 'react-icons/fa';
import { AiFillCaretDown, AiOutlineComment, AiOutlineCaretDown, AiFillLayout } from 'react-icons/ai';
import { IoLogoYoutube } from 'react-icons/io';
import { IoDocumentText } from 'react-icons/io5';
import { HiBriefcase } from 'react-icons/hi';
import { TiChartBar } from 'react-icons/ti';
// import { RiMoreFill } from 'react-icons/ri';

// Firebase
import { db } from '../../firebaseConfig';
import firebase from 'firebase'

// Redux
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/user/userSlice';


function Feed() {
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [isFetching, setisFetching] = useState(false);

    const ref = React.createRef()
    const user = useSelector(selectUser);

    useEffect(() => {
        setisFetching(true)
        const doc = db.collection('posts').orderBy('timestamp', 'desc');
        
        doc.onSnapshot(docSnapshot => {
            console.log('Received data', docSnapshot.docs);
            setisFetching(false)
            setPosts(docSnapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
                metaData: doc.metadata
            })));
        });
    }, []);
        

    const sendPost = e => {
        e.preventDefault();

        db.collection('posts').add({
            name: user.userName,
            description:`${user.email} . One line bio.`,
            message: input,
            photoUrl: user.photoUrl,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        }).then(res => {
            console.log(res)
            setIsOpen(false)
            setInput('') 
        }).catch(err => {
            console.error(err)
        })
    }
    
    return (
        <div className="w-full">
            <div className="px-4 py-2 overflow-hidden bg-white border rounded-lg panel">
                <div className="flex items-center w-full mt-1 mb-1 panel__header">
                    <div className="mr-2 panel__avatar">
                        <Avatar size={"h-12 w-12 overflow-hidden"} src={user.photoUrl} rounded={true} />
                    </div>
                    <div className="grid search place-items-center">
                        <input onClick={() => setIsOpen(!isOpen)} type="text" readOnly={true} className="w-full px-4 py-3 text-base text-gray-500 border border-gray-400 outline-none cursor-pointer rounded-3xl hover:bg-gray-200 focus:bg-gray-300" placeholder="Start a post" />
                        <Modal  isOpen={isOpen} ref={ref} toggleModal={() => setIsOpen(!isOpen)}>
                            <div className="modal">
                                <div className="flex items-center justify-between px-6 py-4 text-xl font-medium tracking-wide text-gray-600 border-b modal__header">
                                    <h5 className="m-0">Create a post</h5>
                                    <div onClick={() => setIsOpen(!isOpen)} className="p-1.5 transition-all rounded-full cursor-pointer hover:bg-gray-200">
                                        <CgClose className="text-gary-700" size="22px" />
                                    </div>
                                </div>

                                <div className="px-6 my-4 modal__body">
                                    <div className="flex items-center modal__section">
                                        <div className="m-0 mr-3">
                                            <Avatar size={"h-12 w-12 overflow-hidden"} src={user.photoUrl} rounded={true} />
                                        </div>
                                        
                                        <div className="flex flex-col">
                                            <h5 className="m-0 text-base antialiased font-medium tracking-wide text-gray-800 capitalize">{user.userName}</h5>
                                            <div className="flex items-center px-4 py-2 text-gray-600 border border-gray-400 cursor-pointer select-none rounded-3xl btn-outline hover:border-gray-600 hover:bg-gray-300">
                                                <FaGlobeAmericas className="mr-2" size="16px" />
                                                <span className="mr-2 text-sm antialiased font-medium tracking-wider">Anyone</span>
                                                <AiFillCaretDown size="14px" />
                                            </div>
                                        </div>
                                    </div>

                                    <form>
                                        <div className="w-full modal__content">
                                            <textarea defaultValue={input} onChange={e => setInput(e.target.value)} rows="4" placeholder="What do want to talk about?" className="w-full my-4 text-base font-light tracking-wide text-gray-600 border-0 rounded outline-none focus:border-white focus:outline-white">
                                            </textarea>
                                            <div className="inline-block px-2 py-1 transition-colors rounded-md cursor-pointer hover:bg-blue-100">
                                                <span className="antialiased font-medium tracking-wide text-blue-500">Add hashtag</span>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between w-full pt-4 modal__footer">
                                            <div className="flex items-center">
                                                <IconBtn Icon={BsCardImage} id={"card-image"} copy={"Add a photo"} />
                                                <IconBtn Icon={IoLogoYoutube} id={"card-image"} copy={"Add a video"} />
                                                <IconBtn Icon={IoDocumentText} id={"card-image"} copy={"Add a document"} />
                                                <IconBtn Icon={HiBriefcase} id={"card-image"} copy={"Share that you're hiring"} />
                                                <IconBtn Icon={TiChartBar} id={"card-image"} copy={"Create a poll"} />
                                                <IconBtn Icon={BsCardImage} id={"card-image"} copy={"Add to your post"} />
                                                <div className="flex items-center px-2 py-1 m-0 ml-2 transition-all cursor-pointer hover:bg-gray-200 rounded-xl">
                                                    <AiOutlineComment className="mr-2 text-gray-500" />
                                                    <span className="text-sm text-gray-600">Anyone</span>
                                                </div>
                                            </div>
                                            
                                            <div className="">
                                                <button onClick={sendPost} type="submit" className={`px-4 py-1 m-0 text-base tracking-wider rounded-2xl ${(input === '') ? 'text-gray-400 bg-gray-200 pointer-events-none' : 'bg-blue-500 text-white'}`}>
                                                    Post
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div> 
                        </Modal>
                    </div>
                </div>

                <div className="flex items-center justify-between w-full panel__footer">
                    <PanelBtn Icon={BsImage} color="text-blue-400" title={"Photo"} />
                    <PanelBtn Icon={IoLogoYoutube} color="text-green-300" title={"Video"} />
                    <PanelBtn Icon={BiCalendarEvent} color="text-yellow-400" title={"Event"} />
                    <PanelBtn Icon={AiFillLayout} color="text-pink-400" title={"Write article"} />
                </div>
            </div>
            
            <div className="flex items-center w-full py-2 filter">
                <div className="h-1 border-b border-gray-400 filter__divider"></div>

                <div className="flex justify-end filter__action">
                    <span className="mr-1 text-sm text-gray-500">Sort by: </span>
                    <button className="flex items-center text-gray-800">
                        <span className="mr-2 text-sm">Top</span>
                        <AiOutlineCaretDown />
                    </button>
                </div>
            </div>
            

            {!isFetching ? ((posts.length > 0) 
                ?
                
                posts.map(({ id, data: { name, description, message, photoUrl } }) => (
                    <Post
                        key={id}
                        name={name}
                        description={description}
                        message={message}
                        photoUrl={photoUrl}
                    />
                ))
                
                :

                <h4 className="w-full text-xl text-center text-gray-500">No posts at this time!</h4>)

                :
                <h4 className="text-base tracking-wider text-center text-gray-500">Fetching...</h4>
            }
            
            {/* <Post
                name={"Danny Thompson"}
                description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, a"}
                message={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum ipsa minus eum vero iusto! Temporibus doloribus expedita pariatur odit odio commodi quo."}
            /> */}
            
        </div>
    );
}

export default Feed;
