import React, { useState } from 'react';
import './Register.css';
import { auth, db } from '../../firebaseConfig';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout, selectUser } from '../../features/user/userSlice';

function Register() {
    const [isVisible, setIsVisible] = useState(false);

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [profileImage, setProfileImage] = useState('');
    const [password, setPassword] = useState('');

    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const signIn = (e) => {
        e.preventDefault();
        
        auth.signInWithEmailAndPassword()
            .then((userCredential) => {
                // Sign In
                console.log(userCredential.user)
            }).catch((err) => {
                console.error(err);
                console.error(err.code);
                console.error(err.message);
            })
    }

    const signUp = (e) => {
        e.preventDefault();

        if (!name.length && !email.length && !password.length) {
            alert('Required Fields')
        }

        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed up
                console.log(userCredential.user);  
                userCredential.user.updateProfile({
                    displayName: name,
                    photoURL: profileImage
                }).then(() => {
                    alert('Registered successfully!');
                    dispatch(login({
                        uid: userCredential.user.uid,
                        email: userCredential.user.email,
                        userName: name,
                        photoUrl: userCredential.user.photoURL,
                    }))
                }).catch((err) => {
                    console.error(err);
                    console.error(err.code);
                    console.error(err.message);
                    alert(err);
                });

            }).catch((err) => {
                console.error(err);
                console.error(err.code);
                console.error(err.message);
                alert(err);
            });
    }

    
    return (
        <div className="grid w-full pt-10 bg-white place-items-start place-content-center">
            <div className="flex items-center w-full mb-5">
                <h4 className="mr-1 text-3xl antialiased tracking-wider text-blue-500 brand">Linked</h4>
                <div className="w-8 h-8">
                    <img src="assets/icons/linkedin.svg" className="object-fill w-full h-full" alt="logo" />
                </div>
            </div>
            <div className="px-8 py-4 mb-5 bg-white rounded-md shadow card" id="card">
                <div className="card__header">
                    <h5 className="m-0 text-3xl text-gray-900 card__title brand">Sign up</h5>
                    <h6 className="m-0 text-sm font-light tracking-wide text-gray-800">Discover people, jobs, and more.</h6>
                </div>

                <div className="w-full mt-4 mb-4 card__body">
                    <form className="w-full">
                        <div className="grid w-full grid-col">
                            <div className="col-span-12 mb-4">
                                <input onChange={e => setName(e.target.value)} value={name} type="text" placeholder="John Snow" name="user-name*" id="user-name" className="w-full py-3 font-light tracking-wide text-gray-600 border-gray-600 rounded form-input" required />
                            </div>

                            <div className="col-span-12 mb-4">
                                <input onChange={e => setEmail(e.target.value)} value={email} type="email" placeholder="e.g johnsnow@gmail.com*" name="user-email" id="user-email" className="w-full py-3 font-light tracking-wide text-gray-600 border-gray-600 rounded form-input" required />
                            </div>

                            <div className="col-span-12 mb-4">
                                <input onChange={e => setProfileImage(e.target.value)} value={profileImage} type="text" placeholder="Profile image URL (optional)" name="user-photo" id="user-photo" className="w-full py-3 font-light tracking-wide text-gray-600 border-gray-600 rounded form-input" />
                            </div>

                            <div className="relative col-span-12 mb-4">
                                <input onChange={e => setPassword(e.target.value)} value={password} type={isVisible ? "text" : "Password"} placeholder="Password" name="user-password" id="user-password" className="w-full py-3 font-light tracking-wide text-gray-600 border-gray-600 rounded form-input" required />
                                <small onClick={() => setIsVisible(!isVisible)} className="absolute text-sm font-medium tracking-wider text-blue-600 cursor-pointer select-none visible-btn">{isVisible ? 'hide' : 'show' }</small>
                            </div>
                        </div>

                        {/* <a href="JavaScript:void(0)" className="tracking-wide text-blue-600 select-none brand--light hover:underline">Forgot password?</a> */}

                        <button onClick={signUp} className="block w-full px-4 py-3 mt-4 tracking-wider text-white bg-blue-500 border-0 outline-none rounded-3xl hover:bg-blue-600 focus:bg-blue-700">Sign up</button>
                    </form>
                    <div className="flex items-center justify-between my-1">
                        <div className="h-1 border-b border-gray-500 divider"></div>
                        <span className="text-gray-800">Or</span>
                        <div className="h-1 border-b border-gray-500 divider"></div>
                    </div>
                    <div className="grid w-full place-items-center">
                        <button className="px-8 py-1.5 text-center text-gray-600 border hover:border-gray-500 rounded-3xl tracking-wide hover:bg-gray-100">Sign in</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
