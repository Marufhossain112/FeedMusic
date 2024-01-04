import React from 'react';
import introVideo from "../../assets/intro.mp4";
import Navbar from '../Navbar/Navbar';
const IntroSection = () => {
    return (
        <div className='w-[100%] h-[100vh] relative'>
            <Navbar />
            <video className='w-[100%] h-[100%] object-cover' src={introVideo} autoPlay loop muted />
            <div className="absolute w-[100%] h-[100%] top-0 ">
                <div className='absolute bottom-0 text-white  '>
                    <div className='max-w-md text-xs text-gray-400 p-5'>
                        <p className='mb-2'>Feed is an intelligent property rights and payments platform, using intelligent software and digital security that goes well beyond 'military-grade' to give users true ownership of their date and IP.</p>
                        <p>
                            Feed facilitates trusted exchanges of users' progressively-perfecting data assets with businesses, researchers, and governments in a <span className='font-bold text-white'>trusted</span>, audited, and independently verifiable manner, on their own terms and conditions.
                        </p>
                    </div>
                    {/* <div className=' absolute center flex justify-center'>
                    <button>
                        SCROLL DOWN
                    </button>
                </div> */}
                </div>

                <div className=' w-[100%] h-[100%]  flex flex-col gap-8 justify-center items-center '>
                    <h2 className='text-[#E8E6E3] text-5xl leading-7'>When you want something,</h2>
                    <h3 className='text-4xl text-[#ceccc7]'>All the universe conspires</h3>
                    <h3 className='text-4xl text-[#818181]'>in helping you to achieve it.</h3>
                    <p className='font-bold text-3xl text-gray-600 italic'>Paulo Coelho</p>
                </div>
                {/* <div> */}

                {/* </div> */}
            </div>
        </div>
    );
};

export default IntroSection;