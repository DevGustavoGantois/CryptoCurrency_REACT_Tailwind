import React from 'react';

//import images
import logo from '../assets/img/logo.svg';
import VisaImg from '../assets/img/visa.png';
import Mastercard from '../assets/img/mastercard.png';
import BitcoinImg from '../assets/img/bitcoin.png';

//import icons
import {IoLogoYoutube, IoLogoInstagram, IoLogoTwitter, IoLogoLinkedin} from 'react-icons/io';

const Footer = () => {
  return (
    <footer className='lg:pt-24 pt-0' data-aos='fade-up' data-aos-offset='400'>
        <div className="container mx-auto lg:mb-24">
          <div className='flex flex-col gap-12 lg:flex-row'>
            <div className='flex-1 mx-auto lg:mx-0 mb-6 max-w-[285px]'>
              <a href="#">
                <img src={logo} alt="" />
              </a>
            </div>
            <div className='flex flex-1 flex-col gap-16 lg:flex-row'>

              <div className='text-center w-full lg:text-left'>
                <div className='text-xl font-medium mb-6'>Links Rápidos</div>
                <ul className='space-y-4 text-gray'>
                  <li><a className='hover:text-blue transition' href="#">Home</a></li>
                  <li><a className='hover:text-blue transition' href="#">Produtos</a></li>
                  <li><a className='hover:text-blue transition' href="#">Sobre</a></li>
                  <li><a className='hover:text-blue transition' href="#">Features</a></li>
                  <li><a className='hover:text-blue transition' href="#">Contato</a></li>
                </ul>
              </div>
              <div className='text-center w-full lg:text-left'>
                <div className='text-xl font-medium mb-6'>Links de Recursos</div>
                <ul className='space-y-4 text-gray'>
                  <li><a className='hover:text-blue transition' href="#">Download Compapper</a></li>
                  <li><a className='hover:text-blue transition' href="#">Token Inteligente</a></li>
                  <li><a className='hover:text-blue transition' href="#">Explorar Blockchain</a></li>
                  <li><a className='hover:text-blue transition' href="#">Crypto API</a></li>
                  <li><a className='hover:text-blue transition' href="#">Interesse</a></li>
                </ul>
              </div>
              <div className='flex flex-col flex-1'>
                <div className='lg:ml-[80px]'>
                  <h3 className='h3 font-medium text-center mb-10 lg:text-left'>Aceitamos os seguintes sistemas de pagamento</h3>
                  <div className='flex justify-center items-center gap-6'>
                    <img src={VisaImg} alt="" />
                    <img src={Mastercard} alt="" />
                    <img src={BitcoinImg} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='py-12'>
            <div className='container mx-auto flex flex-col text-center items-center gap-y-6 lg:flex-row lg:justify-between lg:gap-y-0'>
              <div>&copy; 2024 CRAPPO. Todos os Direitos Reservados.</div>
              <a className='text-gray/20' target='_blank' href="https://www.instagram.com/gucaria_/">Desenvolvido por @gucaria_</a>
               <div className='flex text-2xl gap-x-8'>
                <a className='hover:text-blue transition' href='#'><IoLogoYoutube/></a>
                <a className='hover:text-blue transition' target='_blank' href='https://www.instagram.com/gucaria_/'><IoLogoInstagram/></a>
                <a className='hover:text-blue transition' href='#'><IoLogoTwitter/></a>
                <a className='hover:text-blue transition' target='_blank' href='https://www.linkedin.com/in/gustavo-caria-2839b5168/'><IoLogoLinkedin/></a>
               </div>
            </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
