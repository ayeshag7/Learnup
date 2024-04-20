import React from 'react';
import Image from 'next/image';

function topsellers () {
  return (
    <div className='min-h-screen'>

        <h1 className='mx-16 my-12 text-2xl font-bold'>Top Rated Sellers:</h1>
        
        <div className='flex justify-start gap-x-12 px-4 py-4 mx-16 my-12 border-2 border-[#1DBF73]'>

            <div className='border border-gray-300 rounded-full'>
                <div id="ImageDiv" className='h-24 w-24 border border-gray-300 rounded-full'>
                    <Image
                    src="/pp1.jpg" width="100" height="100" className='rounded-full'
                    />
                </div>
            </div>

            <div>
                <p className='text-xl font-bold mb-2'>Madison Rivers</p>
                <p className='text-sm font-medium text-gray-600 mb-2'>Graphic Design</p>
                <p className='text-lg'>"Smooth transaction, fast shipping. Would buy again!"</p>
            </div>

            <div className='ml-96'>
                <p className='text-lg font-bold'>Ratings: <span className='text-xl font-medium text-yellow-500'>4.8</span></p>
                <p className='text-lg font-bold'>Reviews: <span className='text-xl font-medium text-red-500'>500</span></p>
            </div>

        </div>

        <div className='flex justify-start gap-x-12 px-4 py-4 mx-16 my-12 border-2 border-[#1DBF73]'>

            <div className='border border-gray-300 rounded-full'>
                <div id="ImageDiv" className='h-24 w-24 border border-gray-300 rounded-full'>
                    <Image
                    src="/pp3.jpg" width="100" height="100" className='rounded-full'
                    />
                </div>
            </div>

            <div>
                <p className='text-xl font-bold mb-2'>Oliver West</p>
                <p className='text-sm font-medium text-gray-600 mb-2'>Graphic Design</p>
                <p className='text-lg'>"Pleasant experience, item arrived on time. Thank you!"</p>
            </div>

            <div className='ml-96'>
                <p className='text-lg font-bold'>Ratings: <span className='text-xl font-medium text-yellow-500'>4.7</span></p>
                <p className='text-lg font-bold'>Reviews: <span className='text-xl font-medium text-red-500'>479</span></p>
            </div>

        </div>

        <div className='flex justify-start gap-x-12 px-4 py-4 mx-16 my-12 border-2 border-[#1DBF73]'>

            <div className='border border-gray-300 rounded-full'>
                <div id="ImageDiv" className='h-24 w-24 border border-gray-300 rounded-full'>
                    <Image
                    src="/pp4.jpg" width="100" height="100" className='rounded-full'
                    />
                </div>
            </div>

            <div>
                <p className='text-xl font-bold mb-2'>Benjamin Clarke</p>
                <p className='text-sm font-medium text-gray-600 mb-2'>Graphic Design</p>
                <p className='text-lg'>"Happy with purchase, hassle-free transaction."</p>
            </div>

            <div className='ml-96'>
                <p className='text-lg font-bold'>Ratings: <span className='text-xl font-medium text-yellow-500'>4.6</span></p>
                <p className='text-lg font-bold'>Reviews: <span className='text-xl font-medium text-red-500'>456</span></p>
            </div>

        </div>

        <div className='flex justify-start gap-x-12 px-4 py-4 mx-16 my-12 border-2 border-[#1DBF73]'>

            <div className='border border-gray-300 rounded-full'>
                <div id="ImageDiv" className='h-24 w-24 border border-gray-300 rounded-full'>
                    <Image
                    src="/pp2.jpg" width="100" height="100" className='rounded-full'
                    />
                </div>
            </div>

            <div>
                <p className='text-xl font-bold mb-2'>Sophia Morgan</p>
                <p className='text-sm font-medium text-gray-600 mb-2'>Graphic Design</p>
                <p className='text-lg'>"Smooth transaction, fast shipping. Would buy again!"</p>
            </div>

            <div className='ml-96'>
                <p className='text-lg font-bold'>Ratings: <span className='text-xl font-medium text-yellow-500'>4.5</span></p>
                <p className='text-lg font-bold'>Reviews: <span className='text-xl font-medium text-red-500'>413</span></p>
            </div>

        </div>

    </div>
  )
}

export default topsellers;
