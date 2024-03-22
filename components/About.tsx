import Image from 'next/image'
import React from 'react'
import { ABOUT, VEHICLES } from "@/constant";

const About = () => {
  return (
    <section className='max-container padding-container py-24'>
      <div className='flex flex-col gap-8 lg:flex-row pb-24'>
        {/* LEFT */}
        <div className='flex flex-1 flex-col items-start justify-center lg:order-1'>
          <h1 className='bold-52 capitalize pb-4'>Join Us In Exploring The United Arab Emirates</h1>
          <p className='text-gray-500'>Manzar Alsamaa tourism company is a business that specializes in
            providing travel and tourism-related services to individuals, groups,
            and organizations.
          </p>
          <br />
          <p className='text-gray-500'> These companies play a crucial role in facilitating
            and organizing travel experiences for people who want to explore new
            destinations, whether it's for leisure, business, adventure, or cultural
            enrichment.</p>
          <div className='flex flex-wrap mt-8'>
            {ABOUT.map((about) =>
              <AboutItem
                key={about.title}
                title={about.title}
                icon={about.icon}
              />
            )}
          </div>
        </div>
        {/* RIGHT */}
        <div className='flex flex-1 gap-4 lg:gap-8 lg:order-2'>
          <div>
            <Image
              src='/abouta1.jpg'
              alt='about'
              height={444}
              width={333}
              className='w-auto rounded-lg border border-gray-100 mb-12'
            />
          </div>
          <div>
            <Image
              src='/about2.jpg'
              alt='about'
              height={444}
              width={333}
              className='w-auto rounded-lg border border-gray-100 mb-12'
            />
          </div>
        </div>
      </div>

      {/* Second container */}

      <div className='flex flex-col gap-8 lg:flex-row'>
        {/* LEFT */}
        <div className='flex flex-1 flex-col items-start justify-center lg:order-2'>
          <h1 className='bold-52 capitalize pb-4'>Explore Our Fleet</h1>
          <p className='text-gray-500'>With more than 6, new model HIGH ROOF’s 15 seater cars
            MANZAR AL SAMAA have a Significant role in Tourism
            Industry.
          </p>
          <br />
          <p className='text-gray-500'>Experience the allure of travel in our fleet of premium 7-seater SUVs,With over 15 luxurious options to choose from, these vehicles play a pivotal role in enhancing your journey through the landscapes of the tourism industry. Explore destinations with comfort, style, and convenience, ensuring every adventure is both memorable and seamless..
          </p>
          <br />
          <p className='text-gray-500'> With 5 Land Cruisers and 7 Nissan Petrol MANZAR AL
SAMAA have a Significant role in Tourism Industry</p>
          <div className='flex flex-wrap mt-8'>
            {VEHICLES.map((vehicle) =>
              <VehicleItem
                key={vehicle.title}
                title={vehicle.title}
                icon={vehicle.icon}
              />
            )}
          </div>
        </div>
        {/* RIGHT */}
        <div className='flex flex-1 gap-4 lg:gap-8 lg:order-1'>
          <div>
            <Image
              src='/suv1.jpg'
              alt='about'
              height={444}
              width={333}
              className='w-auto rounded-lg border border-gray-100 mb-12'
            />
          </div>
          <div>
            <Image
              src='/suv2.jpg'
              alt='about'
              height={444}
              width={333}
              className='w-auto rounded-lg border border-gray-100 mb-12'
            />
          </div>
        </div>
      </div>
    </section>
  )
}
type AboutItem = {
  title: string,
  icon: string,
}

const AboutItem = ({ title, icon }: AboutItem) => {
  return (
    <div className='w-1/2 flex gap-2 mb-4'>
      <Image src={icon} alt='icon' height={20} width={20} />
      <p className='regular-14'>{title}</p>
    </div>
  )
}
type VehicleItem = {
  title: string,
  icon: string,
}

const VehicleItem = ({ title, icon }: VehicleItem) => {
  return (
    <div className='w-1/2 flex gap-2 mb-4'>
      <Image src={icon} alt='icon' height={20} width={20} />
      <p className='regular-14'>{title}</p>
    </div>
  )
}
export default About
