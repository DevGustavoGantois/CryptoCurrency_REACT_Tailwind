import React from 'react'

//import icons
import {HiChartBar, HiUser, HiGlobe } from 'react-icons/hi';


const Stats = () => {
  return (
    <section className='pt-24' data-aos='fade-up' data-aos-delay='1200'>
       <div className="container mx-auto">
        <div className='flex flex-col gap-y-6 lg:flex-row lg:justify-between'>
        <div className='flex items-center gap-x-6'>
          <div className='bg-white/10 w-20 h-20 rounded-full flex items-center justify-center text-blue text-2xl lg:text-4xl'>
            <div><HiChartBar/></div>
          </div>
          <div>
            <div className='text-2xl font-bold lg:text-[40px] lg:mb-2'>R$30B</div>
            <div className='text-gray'>Moeda Digital Trocada</div>
          </div>
        </div>
        <div className='flex items-center gap-x-6'>
          <div className='bg-white/10 w-20 h-20 rounded-full flex items-center justify-center text-blue text-2xl lg:text-4xl'>
            <div><HiUser/></div>
          </div>
          <div>
            <div className='text-2xl font-bold lg:text-[40px] lg:mb-2'>R$10M+</div>
            <div className='text-gray'>Investidor de Carteiras Confiáveis</div>
          </div>
        </div>
        <div className='flex items-center gap-x-6'>
          <div className='bg-white/10 w-20 h-20 rounded-full flex items-center justify-center text-blue text-2xl lg:text-4xl'>
            <div><HiGlobe/></div>
          </div>
          <div>
            <div className='text-2xl font-bold lg:text-[40px] lg:mb-2'>195</div>
            <div className='text-gray'>Países Apoiados</div>
          </div>
        </div>
       </div>
       </div>
    </section>
  )
}

export default Stats
