import React, { useState, useEffect, useRef } from 'react';
import man from '../assets/man.svg';
import woman from '../assets/woman.svg';
import Header from '../components/Header';
import LoginModal from '../components/LoginModal';
import RegisterModal from '../components/RegisterModal';

const HomePage=()=> {
    
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const openLoginModal = () => {
    setIsModalOpen(true);
    setIsLogin(true);
  };

  const openRegisterModal = () => {
    setIsModalOpen(true);
    setIsLogin(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-wrap mx-auto bg-[#2C3E50]">
      <Header openLoginModal={openLoginModal} />
      <div className="flex w-full bg-white px-20 p-4 shadow-lg rounded-bl-4xl rounded-br-4xl text-left justify-between items-center">
        <div className="flex flex-col mt-5">
          <h1 className='text-5xl leading-[3.5rem] font-semibold'>Maligayang Pagdating sa SalimBigkas!</h1>
          <h2 className='mt-5 text-xl font-medium'>Matuto ng Filipino nang Mas Madali at Mas Matalino!</h2>
          <button className='mt-10 w-60 text-white text-lg px-4 py-4 rounded-4xl shadow-md drop-shadow-lg bg-[#2C3E50] hover:bg-[#34495e]'>Simulan ang Pag-aaral</button>
          <h2 className='mt-5 mb-5'>Wala pang account? <a href="#" onClick={openRegisterModal}>Magrehistro!</a></h2>
        </div>
        <div className="flex right-0 top-0">
          <img
            src={man}
            alt="Sample Icon"
            className="w-auto h-auto absolute top-30 right-60"
          />
          <img
            src={woman}
            alt="Sample Icon"
            className="w-auto h-auto absolute top-30 right-15"
          />
        </div>
      </div>
      {isModalOpen && (
        <div className={'fixed inset-0 bg-black/80 z-50 backdrop-blur-sm flex items-center justify-center'}>
          {isLogin ? (
            <LoginModal isOpen={isModalOpen} onClose={closeModal} onSwitch={openRegisterModal} />
          ) : (
            <RegisterModal isOpen={isModalOpen} onClose={closeModal} onSwitch={openLoginModal} />
          )}
        </div>
      )}
    </div>
  );
};

export default HomePage;