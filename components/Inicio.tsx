import React from 'react'

export const Inicio = () => {
  return (
    <div className='h-auto w-[100%] flex sm:flex-row flex-col-reverse ' >
        <div className=' relative sm:w-2/5 rounded-tr-[50%] rounded-br-[50%] h-[90vh] bg-gradient-to-r from-violet-500 to-violet-400 ' >
        <img className='absolute right-[-10px] ' src='https://res.cloudinary.com/dzqdjsrez/image/upload/v1713967071/flouffy-g2FtlFrc164-unsplash-removebg-preview_zjg25y.png' ></img>
        </div>
        <div className='sm:w-2/4   flex flex-col justify-center relative  sm:p-20 p-10' >
          <h1 className=' text-6xl font-bold text-gray-800 ' >Turnos Online</h1>
          <p className=' text-gray-600' >
          En un mundo cada vez más conectado, entendemos la importancia de simplificar la vida de nuestros ciudadanos  y hacer que el cuidado de sus compañeros peludos sea lo más conveniente posible. Es por eso que nos complace presentar nuestro sistema de turnos online diseñado para brindar comodidad y flexibilidad permitiéndoles programar citas desde la comodidad de su hogar o en cualquier momento y lugar con solo unos pocos clics.
          </p>
         
          <img className='w-40 invisible sm:visible absolute bottom-5 right-0 ' src='https://res.cloudinary.com/dzqdjsrez/image/upload/v1714049268/ELDORAD222O_mzvmdr.png' ></img>
          
        </div>
    </div>
  )
}
