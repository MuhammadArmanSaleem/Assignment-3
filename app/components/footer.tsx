import React from 'react'

const Footer = () => {
  return (
    <div><footer className="bg-gray-800 text-white py-8">

    <div className="mx-auto px-4 px-6 px-8 ">
      <div className="flex justify-between items-center pl-12">
        
    
        <div className="text-center text-left ">
          <span className="text-lg font-semibold mb-2 block">Seotime X Vercel</span>
          <span className="text-sm block">
            Address: Lorem ipsum dolor sit amet.
          </span>
          <span className="text-sm block">Email:vercel@gamil.com</span>
          <span className="text-sm block">Phone: +5486454 687</span>
        </div>

      
        <div className="text-center pr-12 ">
          <span className="text-lg font-semibold mb-2 block">Useful Links</span>
          <ul>
            <li>
              <a href="#" className="hover:text-gray-400">About Us</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">Services</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">Contact Us</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">Privacy Policy</a>
            </li>
          </ul>
        </div>
</div>
    
    </div>

  
    <div className="text-center ">
      <span className="text-sm block">
        SeoTime X Vercel. All Rights Reserved.
      </span>
    </div>
  </footer>
        
    </div>
  )
}

export default Footer