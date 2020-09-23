import React from 'react'
import { Link } from 'react-router-dom'
import Products from './Products'


export default function Home() {

  return (
    <div>
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
        style={{
          minHeight: "25vh"
        }}>
        <div className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')"
          }}>
          <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div className="px-6">
                <h1 className="text-white font-semibold text-5xl">
                  Shock your taste buds!
                    </h1>
                <p className="mt-4 text-lg text-gray-300">
                  Two human beings with the idea of sweetening your life and putting a smile on your face.
                    </p>
                    <Link to="/products">
                      <button className="bg-pink-600 text-white active:bg-pink-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mt-10 transition-all ease-in-out" 
                        type="button"
                      >
                        Shop Now
                      </button>
                    </Link>
              </div>
            </div>
          </div>
        </div>
      </div>


      <Products />
    </div>
  )
}
