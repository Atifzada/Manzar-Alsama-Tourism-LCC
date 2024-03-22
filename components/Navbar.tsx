'use client'
import { NAV_LINK } from '@/constant'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from './Button';
import { useState } from 'react';

const Navbar = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const togglMenu = () => setMenuOpened(!menuOpened);
  return (
    <nav className='flexBetween max-container mt-3 px-12 z-30 py-2 shadow-xl bg-white rounded-full ring-1 ring-slate-100 fixed w-[95%] left-[50%] top-1 translate-x-[-50%]'>
      <Link href='/'>
        <span className='bold-28'>LOGO</span>
      </Link>

      {/* DESKTOP */}

      <ul className='hidden lg:flex h-full'>
        {
          NAV_LINK.map((link) => (
            <li key={link.key} className='relative gap-2 mx-8 text-gray-500'>
              <Link href={link.href}>
                <div className='flex items-center'>
                  <Image
                    src={link.iconURL}
                    alt={link.label}
                    height={20}
                    width={20}
                    className='h-auto w-4'
                  />
                  <span className="ml-2 inline-block transition-all duration-300 ease-in-out border-b-2 border-transparent hover:border-black">{link.label}</span>
                </div>
              </Link>
            </li>
          ))
        }
      </ul>
      {/* <div className='hidden lg:block'>
        <Button 
         type='button'
         title='Login'
         icon='/user.svg'
         variant='btn-dark-rounded'
         />
      </div> */}

      {/* MOBILE */}
      {!menuOpened ?
        (<Image
          src='menu.svg'
          alt='menuIcon'
          width={28}
          height={28}
          className='lg:hidden inline-block cursor-pointer'
          onClick={togglMenu}
        />) :
        (<Image
          src='close.svg'
          alt='menuIcon'
          width={28}
          height={28}
          className='lg:hidden inline-block cursor-pointer'
          onClick={togglMenu}
        />)
      }
      {/* <ul className={menuOpened ? "h-[500%] flex flex-col justify-center pl-[30%] fixed top-14 right-0 w-full bg-slate-100 rounded-lg transition-all duration-500 shadow-md" : "hidden"}> */}
      <ul className={menuOpened ? " flex flex-col justify-center p-12 fixed top-14 right-0 bg-slate-100 rounded-lg transition-all duration-500 shadow-md" : "hidden"}>

        {
          NAV_LINK.map((link) => (
            <li key={link.key} className='relative gap-1 m-6 text-gray-500'>
              <Link href={link.href}>
                <div className='flex items-center'>
                  <Image
                    src={link.iconURL}
                    alt={link.label}
                    height={20}
                    width={20}
                    className='h-auto w-4'
                  />
                  <span className="ml-2 inline-block transition-all duration-300 ease-in-out border-b-2 border-transparent hover:border-black">{link.label}</span>
                </div>
              </Link>
            </li>
          ))
        }
      </ul>
    </nav>
  );
};

export default Navbar;
