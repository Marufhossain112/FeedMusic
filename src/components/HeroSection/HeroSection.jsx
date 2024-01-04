import React from 'react';
import introVideo from "../../assets/intro.mp4";
const HeroSection = () => {
    return (
        <div className='w-[100%] h-[100vh]'>
            <video className='w-[100%] h-[100%] object-cover' src={introVideo} autoPlay loop muted />
            <div className="absolute w-[100%] h-[100%] top-0 flex flex-col gap-8 justify-center items-center ">
                <h2 className='text-[#E8E6E3] text-5xl leading-7'>When you want something,</h2>
                <h3 className='text-4xl text-[#ceccc7]'>All the universe conspires</h3>
                <h3 className='text-4xl text-[#818181]'>in helping you to achieve it.</h3>
                <p className='font-bold text-3xl text-gray-600 italic'>Paulo Coelho</p>
            </div>
        </div>
    );
};

export default HeroSection;