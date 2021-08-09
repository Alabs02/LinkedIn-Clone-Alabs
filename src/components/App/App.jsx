import React from 'react';
import Header from '../Header'
import Sidebar from '../Sidebar';
// import Login from '../Login';
import Register from '../Register';
import Feed from '../Feed';
import { useSelector, useDispatch } from 'react-redux'
import { login, logout, selectUser } from '../../features/user/userSlice'

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  
  
  return (
    <div className="app">
      {!user ? (

        <Register />
      ) : (
        <div className="w-full min-h-screen bg-gray-100">
          <Header/>

          <div className="grid grid-cols-12 px-12 my-8 app__body gap-x-5">
              <div className="col-span-3">
                <Sidebar />
              </div>
            <div className="col-span-6">
              <Feed />
            </div>
            <div className="col-span-3 p-4"></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
