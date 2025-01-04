
import FeaturedProductComponent from '@/components/mileston02/FeaturedProductComponent'
import ChairGallery from '@/components/mileston02/GalleryComponent'
import LastHome from '@/components/mileston02/LastHomeComponent'
import Logos from '@/components/mileston02/logos'
import FurnitureCollection from '@/components/mileston02/section1'
import TopCategories from '@/components/mileston02/TopCategoryComponent'
import React from 'react'

export default function Home() {
  return (
    <div className='px-4 md:pl-56 md:pr-36 flex-col flex  overflow-x-hidden'>
      <FurnitureCollection />
      <Logos/>
      <div>
        <h1 className='text-4xl font-semibold'>Featured Products</h1>
      </div>
      <FeaturedProductComponent/>
      <TopCategories/>
    < ChairGallery/>
      <div className='mt-12'>
        <h1 className='text-4xl w-full text-center font-semibold'>Our  Products</h1>
      </div>
    
    <LastHome/>
    </div>
  )
}