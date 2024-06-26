import React from 'react';

//import image
import Image1 from '../assets/img/feature-1-img.png'

const FeatureSection1 = () => {
  return (
    <section className='pb-[30px] lg:pb-[120px] pt-0' id='about'>
      <div className="flex flex-col lg:flex-row">
        <div className='max-w-[454px] mb-6 lg:mt-10' data-aos='fade-right' data-aos-offset='400'>
          <h3 className='h3 mb-6'>Invista de forma inteligente</h3>
          <p className='text-gray mb-8'>Obter informações estatísticas completas sobre o comportamento de compradores e vendedores o ajudará a tomar uma decisão.</p>
          <button className='btn px-8'>Saiba mais</button>
        </div>
        <div className='flex-1 flex justify-end' data-aos='fade-left' data-aos-offset='400'>
          <img src={Image1} alt="" />
        </div>
      </div>
    </section>
  )
}

export default FeatureSection1
