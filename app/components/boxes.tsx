import React from 'react'

const boxes = () => {
  return (
    <div>
        <div className="boxes py-2">
            <div className='flex content-between item-center space-x-2'>
                <div className="box-1 p-6 rounded-md bg-gray-300 shadow-md text-center flex-1">
                <span className="text-lg mb-2 font-semibold block">Lorem.</span>
                <span className="block">Lorem ipsum dolor sit.</span>
                </div>
                <div className="box-2 p-6 rounded-md bg-gray-300 shadow-md text-center flex-1">
                <span className="text-lg mb-2 font-semibold block">Lorem.</span>
                <span className="block">Lorem ipsum dolor sit.</span>
                </div>
                <div className="box-3 p-6 rounded-md bg-gray-300 shadow-md text-center flex-1">
                <span className="text-lg mb-2 block font-semibold">Lorem.</span>
                <span className="block">Lorem ipsum dolor sit.</span>
                </div>
                <div className="box-4 p-6 rounded-md bg-gray-300 shadow-md text-center flex-1">
                <span className="text-lg mb-2 block font-semibold">Lorem.</span>
                <span className="block">Lorem ipsum dolor sit.</span>
                </div>
                
            </div>

        </div>
        
        <div className="anchor-section py-8 text-center">
        <img
          src="favicon.ico" 
          alt="Anchor"
          className="mx-auto h-16"
        />
        
        <span className="mt-4 block">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At!
        </span>
      </div>
    </div>
  )
}

export default boxes