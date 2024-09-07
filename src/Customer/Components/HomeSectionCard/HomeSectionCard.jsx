import React from 'react'

// object cover because don't wnat our image to shrink
// object top is to not cut the image from top, but can be cut from bottom
const HomeSectionCard = ({product}) => {
  return (
    <div className='cursor-pointer flex flex-col item-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3'>
        <div className='h-[14rem] w-[12rem]'>
            <img className='object-cover object-top w-full h-full' src={product.image} alt=""/>
        </div>
        <div className='p-4'>
            <h3>Content</h3>
            <p> title of Content</p>
        </div>

    </div>
  )
}

export default HomeSectionCard