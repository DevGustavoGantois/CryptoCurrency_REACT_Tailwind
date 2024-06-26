import React from 'react';

//import components
import CalcForm from './CalcForm';

const Calculate = () => {
  return (
    <section className='section' id='features'>
       <div className="container mx-auto">
        <div className='text-center'>
          <h2 className='section-title' data-aos='fade-up' data-aos-offset='400'>Verifique o quanto você pode ganhar</h2>
          <p className='section-subtitle text-lg mb-16 max-w-[622px] mx-auto' data-aos='fade-up' data-aos-offset='450'>Vamos verificar sua taxa de hash para ver quanto você ganhará hoje.</p>
        </div>
        <CalcForm />
       </div>
    </section>
  )
}

export default Calculate
