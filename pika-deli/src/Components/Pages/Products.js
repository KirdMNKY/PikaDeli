import React from 'react'
import ProductCard from '../Common/ProductCard'

export default function Products() {
  return (
    <>
      <div className="flex flex-wrap items-center justify-center mb-8 mx-4 md:mx-16 lg:mx-32 xl:mx-64 justify-around">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </>
  )
}
