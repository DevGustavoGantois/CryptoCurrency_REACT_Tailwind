import React from 'react'

const CalcForm = () => {
  return (
    <div className='bg-white w-full max-w-[942px] mx-auto rounded-2xl text-darkblue p-12 shadow-primary' data-aos='fade-up' data-offset='500'>
      <form className='flex flex-col lg:flex-row lg:justify-between lg:items-center space-y-12 lg:space-y-0'>
        <input className='input placeholder:text-darkblue' type="text" placeholder='Insira sua taxa de hash' />
        <select className='select'>
          <option value="">TH/s</option>
          <option value="">H/s</option>
          <option value="">KH/s</option>
          <option value="">MH/s</option>
          <option value="">GH/s</option>
        </select>
        <button className='btn text-white px-8 flex self-start'>Calcular</button>
      </form>
      <div className='mt-24'>
        <div className='text-blue font-medium mb-4'>RENDA ESTIMATIVA DE 24 HORAS:</div>
        <div className='text-[32px] font-bold mb-3'>0.055 130 59 ETH <span className='text-blue'>(R$1275)</span></div>
      </div>
      <div className='text-gray-500 tracking-[1%]'>A receita mudará com base na dificuldade de mineração e no preço do Ethereum.</div>
    </div>
  )
}

export default CalcForm
