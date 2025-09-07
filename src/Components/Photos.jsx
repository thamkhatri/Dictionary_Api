import React from 'react'

const Photos = ({ images, word }) => {
  return (
    <div className='px-5'>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 bg-emerald-50 rounded-2xl outline-2 outline-offset-2 outline-emerald-500  justify-center p-4 gap-4'>
        {images.map((img) => (
          <div key={img.id} className=' rounded-xl w-full'>
            <img

              src={img.src.small}
              alt={word}
              className="rounded-xl  w-[233px] h-[150px] object-cover "
            />
          </div>
        ))}
      </div>
    </div>
  )
}
export default Photos