import { exportTraceState } from 'next/dist/trace'
import React from 'react'

const Header = () => {
  return (
    <div>
    <div className="container mx-auto px-4 flex justify-between items-center py-4 sticky top-0">
     
      <div className="flex items-center space-x-2">
        <img
          src="favicon.ico"
          alt="Logo"
          className="h-8 w-8"
        />
        <span className="text-xl font-bold text-blue-500">SeoTime</span>
      </div>

  
      <div className=" md:flex space-x-8">
        <a href="#" className="text-gray-600 hover:text-blue-500">Home</a>
        <a href="#" className="text-gray-600 hover:text-blue-500">Features</a>
        <a href="#" className="text-gray-600 hover:text-blue-500">What is SEO?</a>
        <a href="#" className="text-gray-600 hover:text-blue-500">Case Studies</a>
        <a href="#" className="text-gray-600 hover:text-blue-500">Blog</a>
        <a href="#" className="text-gray-600 hover:text-blue-500">Contact</a>
      </div>

      
      <div className="flex items-center space-x-4">
        
        <div className="lang">
          <button className="text-gray-600 hover:text-blue-500">English</button>
        </div>
        
        <div className="flex items-center space-x-2">
          <img
            src=""
            alt="phone-icon"
            className="h-5 w-5"
          />
          <span className="text-gray-600">+5465 546835</span>
        </div>
        
        <a
          href="free-analysis"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Free SEO Analysis
        </a>
      </div>

      
    </div>
 
    </div>
  )
}



export default Header;