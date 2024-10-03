import React from 'react';
import background from './assets/images/Background.png';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className='p-[40px]'>
      <div className="absolute top-0 left-0 w-full h-full">
        <img src={background} alt="Background" className="w-full h-full object-cover " />
      </div>
      <Navbar/>
    </div>
  );
}

export default App;

