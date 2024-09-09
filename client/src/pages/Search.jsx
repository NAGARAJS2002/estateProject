import React from 'react'

export default function Search() {
  return (
    <div className='flex flex-col md:flex-row '>
     <div className='p-7 border-2-2 md: border-r-2 md:min-h-screen'>
        <form className='flex flex-col gap-8 '>
            <div className='flex items-center gap-2'>
                <label className='whitespace-nowrap font-semibold' >Search Term:</label>
                <input className='border rounded-lg p-3 w-full' type="text"  id="searchTerm" placeholder='search...' />
            </div>
            <div className='flex gap-2 flex-wrap items-center  '>
                <label className='font-semibold'> Type:</label>
                <div className='flex gap-2'>
                    <input type="checkbox"  id="all"  className='w-5'/>
                    <span>Rent & sale</span>
                </div>
                <div className='flex gap-2'>
                    <input type="checkbox"  id="rent"  className='w-5'/>
                    <span>Rent</span>
                </div>
                <div className='flex gap-2'>
                    <input type="checkbox"  id="sale"  className='w-5'/>
                    <span>Sale</span>
                </div>
                <div className='flex gap-2'>
                    <input type="checkbox"  id="offer"  className='w-5'/>
                    <span>Offer</span>
                </div>
                <div className='flex gap-2'>
                    <input type="checkbox"  id="other"  className='w-5'/>
                    <span>Other</span>
                </div>
            </div>
            <div className='flex gap-2 flex-wrap items-center  '>
                <label className='font-semibold'> Amenities:</label>
                <div className='flex gap-2'>
                    <input type="checkbox"  id="parking"  className='w-5'/>
                    <span>Parking</span>
                </div>
                <div className='flex gap-2'>
                    <input type="checkbox"  id="funished"  className='w-5'/>
                    <span>Funished</span>
                </div>
            
            </div>
            <div>
                <label className='font-semibold'>Sort: </label>
                <select className='border rounded-lg p-3' id='sort_order'>
                    <option value="">Price high to low</option>
                    <option value="">Price low to hight</option>
                    <option value="">Latest</option>
                    <option value="">Oldest</option>
                </select>
            </div>
            <button className='bg-slate-700 text-white rounded-lg uppercase p-3 hover:opacity-95'>Search</button>
        </form>
     </div>
     <div className=''>
     <h1 className='text-3xl font-semibold border-b p-3 text-slate-700 '>Listing results:</h1>
  </div>
 </div>
    
  )
}
