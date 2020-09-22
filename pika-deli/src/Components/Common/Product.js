import React from 'react'

export default function Product() {
  return (
    <>
      <div className="w-5/12 md:w-1/6 m-4 rounded overflow-hidden shadow-lg">

        <img className="w-full" src="https://loremflickr.com/320/240" alt="Sunset in the mountains" />

        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Pika Worms</div>
        </div>
      </div>
    </>
  )
}
