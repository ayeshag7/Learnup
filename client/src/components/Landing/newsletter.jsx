import React from 'react'

export default function Newsletter () {
  return (
    <div className='mx-20 my-20 flex justify-between'>
        <h1 className="text-3xl font-bold">
            <span className="bg-[#DBF6A4] text-[#052E33] dark:bg-[#6B8B40] dark:text-white px-2">S'abonner à notre newsletter</span>
        </h1>
        <div className='w-1/2 flex gap-x-4'>
            <input type="text" placeholder='Entrez votre adresse e-mail'
            className='border border-gray-400 rounded-lg px-3 w-full py-3' />
            <button className='border text-base font-medium px-6 py-3   border-[#1DBF73] bg-[#1DBF73] text-white rounded-md'>
                S'abonner
            </button>
        </div>
    </div>
  )
}
