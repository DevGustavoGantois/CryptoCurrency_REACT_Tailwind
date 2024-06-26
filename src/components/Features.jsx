import React from 'react';

//import components
import FeaturesSection1 from './FeatureSection1';
import FeaturesSection2 from './FeatureSection2';
import FeaturesSection3 from './FeatureSection3';

const Features = () => {
  return (
    <section className='pt-12 lg:pt-24 bg-violet'>
        <div className="container mx-auto">
          <div className='text-center max-w-[758px] mx-auto mb-24'>
            <h2 className='section-title' data-aos='fade-up' data-aos-offset='400'>Sentimentos do mercado, portfólio e administre a infraestrutura de sua escolha</h2>
          </div>
          <FeaturesSection1/>
          <FeaturesSection2/>
          <FeaturesSection3/>
        </div>
    </section>
  )
}

export default Features
