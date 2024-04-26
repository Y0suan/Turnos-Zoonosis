import { Button } from '@nextui-org/button'
import React from 'react'

export const DiasdeAtencion = () => {
  return (
    <div className='sm:px-20 w-[100%] h-auto flex py-20 sm:flex-row flex-col  items-center ' >
      <div className='relative overflow-hidden sm:w-[500px] w-[400px] h-[400px] rounded-full  bg-gradient-to-r from-violet-500 to-violet-400 ' >
        <img className='absolute top-[-50px] ' src="https://res.cloudinary.com/dzqdjsrez/image/upload/v1713966847/alvan-nee-LHeDYF6az38-unsplash-removebg-preview_s8fxbd.png" alt="" />
      </div>
      <div className='p-10 sm:px-16 sm:w-1/2 h-auto flex flex-col justify-center  ' >
        <img src="https://res.cloudinary.com/dzqdjsrez/image/upload/v1714050227/ZOONOSIS_mr7rox.png" alt="" />
        <h4 className='text-4xl font-semibold text-[#533482]  ' >
          Dias de Atencion
        </h4>
        <p className='text-gray-500' >
        Te invitamos a visitarnos para una consulta y a traer a tu mascota. Puedes encontrarnos en nuestros días de atención regular o acercarte a nuestros operativos barriales junto con tus  mascotas.
        </p>
        <div className='flex py-7 gap-10 flex-wrap ' >
         <div className='text-gray-800  border-2 border-l-gray-400 border-white w-fit p-4' >
           <h6 className=' text-3xl ' >Lunes</h6>
           <p>7:30 a 11:00</p>
         </div>
         <div className='text-gray-800  border-2 border-l-gray-400 border-white w-fit p-4' >
           <h6 className=' text-3xl ' >Jueves</h6>
           <p>14:30 a 17:30</p>
           <p>Operativo Barrial</p>
         </div>
         <div className='text-gray-800  border-2 border-l-gray-400 border-white w-fit p-4' >
           <h6 className=' text-3xl ' >Viernes</h6>
           <p>7:30 a 11:00</p>
         </div>

        </div>
      </div>
    </div>
  )
}
