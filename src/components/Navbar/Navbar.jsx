import React from 'react';
import logo from "../../assets/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
    return (
        <div className='absolute text-[#E8E6E3] px-10 py-8 flex justify-between items-center  w-full '>
            <div>
                <img src={logo} alt='logo' height={30} width={30} />
            </div>
            <div>
                <ul className='flex gap-8 text-base'>
                    <li>
                        <a href="/">INTRODUCTION</a>
                    </li>
                    <li>
                        <a href="/">THE TECHNOLOGY</a>
                    </li>
                    <li>
                        <a href="/">TECH SPOTLIGHT</a>
                    </li>
                    <li>
                        <a href="/">WHY MUSIC?</a>
                    </li>
                </ul>
            </div>
            <div>
                <GiHamburgerMenu className='text-4xl'/>
            </div>
        </div>
    );
};

export default Navbar;