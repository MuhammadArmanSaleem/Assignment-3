import React from 'react'

const Banner = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-teal-500 text-white py-20">
    <div className="container mx-auto text-center">
      <h1 className="text-4xl font-bold mb-4">Let's Analyze Your Website SEO</h1>
      <p className="mb-8">Now you can customize your SEO service according to your need.</p>
      <input type="text" placeholder="Add your website URL" className="px-4 py-2 rounded-md w-1/2" />
      <button className="bg-white text-blue-500 px-4 py-2 rounded-md ml-2">Analyze</button>
    </div>
  </section>
  )
}

export default Banner;