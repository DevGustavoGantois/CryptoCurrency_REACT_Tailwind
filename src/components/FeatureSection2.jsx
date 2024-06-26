import React from 'react';

//import image
import image2 from '../assets/img/feature-2-img.png';

const FeatureSection2 = () => {
  return (
    <section className='py-[30px] lg:py-[120px]'>
      <div className="container mx-auto">
        <div className='flex flex-col justify-end items-center lg:flex-row'>
          <div className='flex-1 lg:absolute lg:left-0 order-2 lg:order-1' data-aos='fade-right' data-aos-offset='400'>
            <img src={image2} alt="" />
          </div>
          <div className='flex-1 max-w-[456px]' data-aos='fade-left' data-aos-offset='400'>
            <h3 className='h3 mb-6'>Estatísticas Detalhadas</h3>
            <p className='text-gray mb-8'>Visualize todas as informações relacionadas à mineração em tempo real, a qualquer momento e em qualquer local e decida em quais pesquisas você deseja minerar.</p>
            <button className='btn px-8 mb-6 lg:mb-0'>Saiba mais</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeatureSection2
