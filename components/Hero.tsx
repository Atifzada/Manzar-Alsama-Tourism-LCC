import React from 'react';
import Button from './Button';
import { CATEGORIES } from '@/constant';
import Link from 'next/link';
import Image from 'next/image';

type CategoryItemProps = {
  title: string;
  icon: string;
};

const CategoryItem = ({ title, icon }: CategoryItemProps) => {
  const categoryLinks: { [key: string]: string } = {
    places: "https://www.tripadvisor.com/Attractions-g295424-Activities-Dubai_Emirate_of_Dubai.html",
    restaurant: "https://www.tripadvisor.com/Restaurants-g295424-Dubai_Emirate_of_Dubai.html",
    hotels: "https://www.tripadvisor.com/SmartDeals-g295424-Dubai_Emirate_of_Dubai-Hotel-Deals.html",
    shopping: "https://www.tripadvisor.com/Attractions-g295424-Activities-c26-t143-Dubai_Emirate_of_Dubai.html"
  };

  return (
    <a href={categoryLinks[title.toLowerCase()]} target='_blank' className='bg-white flexCenter gap-2 px-4 py-2 cursor-pointer hover:translate-y-[2px]'>
      <Image src={icon} alt="icon" height={22} width={22} className='regular-28' />
      <span className='capitalize regular-16'>{title}</span>
    </a>
  );
};

const Hero = () => {
  return (
    <section className='relative bg-hero bg-cover bg-center bg-no-repeat h-[100vh] w-full z-10 pb-12'>
      <div className='max-container padding-container relative top-28 sm:top-1/3 z-10'>
        <h1 className='bold-64 sm:bold-64 text-white capitalize max-w-[36rem]'>Explore Dubai With Us</h1>
        <p className='regular-16 text-white lg:w-1/2'>Welcome to <span className="text-4xl font-bold text-yellow-500">MANZAR ALSAMAA</span>, Your Gateway to Extraordinary Journeys in Dubai! Embark on unforgettable adventures, discover hidden gems, and immerse yourself in the vibrant culture of the City of Gold. Let us be your compass as you explore the wonders of Dubai with expert guidance and personalized experiences. Start your journey with us today!
        </p>
        <div className='mt-8'>
          <Button
            type='button'
            title='travel plan'
            icon='send-plane.svg'
            variant='btn_white_rounded'
          />
        </div>
        <h4 className='text-white my-4 bold-22'>Explore the key points</h4>
        <ul className='flex flex-wrap gap-4'>
          {CATEGORIES.map((category) => (
            <CategoryItem
              key={category.title}
              title={category.title}
              icon={category.icon}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Hero;
