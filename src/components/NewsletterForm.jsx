import React from 'react'

const NewsletterForm = () => {
  return (
    <form className='flex-1 flex flex-col items-start w-full gap-y-6 lg:flex-row lg:gap-x-10' id='contact'>
      <input className='input text-base text-white placeholder:text-white placeholder:text-base' type="text" placeholder='Digite o seu email' />
      <button className='w-[250px] btn bg-white text-darkblue px-8 hover:bg-white/70'>Inscreva-se</button>
    </form>
  )
}

export default NewsletterForm
