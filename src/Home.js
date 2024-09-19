import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
    <div
      className="bg-cover bg-center h-80 text-white flex items-center justify-center mt-2"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/2460436/pexels-photo-2460436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      }}
    >
      <div className="bg-black bg-opacity-50 p-8 text-center rounded-lg">
        <h2 className="text-3xl font-bold mb-4">
        Mega Deals on Our Best Products!
        </h2>
        <p className="mb-6 text-4xl">
        Grab up to <span className="font-bold">50% off</span> on selected items. Limited time offer!
        </p>
        <Link
          to="/products"
          className="bg-red-500 py-3 px-6 rounded-full font-semibold hover:bg-yellow-400 transition duration-300"
        >
          Start Shopping
        </Link>
      </div>
    </div>

    <div
      className="bg-cover bg-center h-80 text-white flex items-center justify-center mt-2"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg')",
      }}
    >
      <div className="bg-black bg-opacity-50 p-8 text-center rounded-lg">
        <h2 className="text-3xl font-bold mb-4">
          Discover the Latest Fashion Trends!
        </h2>
        <p className="mb-6 text-lg">
          Shop our new arrivals and get up to <span className="font-bold">40% off</span> on selected items.
        </p>
        <Link
          to="/products"
          className="bg-yellow-500 text-black py-3 px-6 rounded-full font-semibold hover:bg-yellow-400 transition duration-300"
        >
          Start Shopping
        </Link>
      </div>
    </div>
    </div>
  )
}

export default Home