import React from 'react';
import Header from '../Header'
import Sidebar from '../Sidebar';
import Feed from '../Feed';

function App() {
  return (
    <div className="w-full min-h-screen bg-gray-100 app">
      <Header/>

      <div className="grid grid-cols-12 px-12 my-8 border app__body gap-x-5">
          <div className="col-span-3">
            <Sidebar />
          </div>
        <div className="col-span-6">
          <Feed />
        </div>
        <div className="col-span-3 p-4 border"></div>
      </div>
    </div>
  );
}

export default App;
