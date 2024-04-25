import React from 'react'

export const Inicio = () => {
  return (
    <div className='h-auto w-[100%] flex sm:flex-row flex-col-reverse ' >
        <div className=' relative sm:w-2/5 rounded-tr-[50%] rounded-br-[50%] h-[90vh] bg-gradient-to-r from-violet-500 to-violet-400 ' >
        <img className='absolute right-[-10px] ' src='https://res.cloudinary.com/dzqdjsrez/image/upload/v1713967071/flouffy-g2FtlFrc164-unsplash-removebg-preview_zjg25y.png' ></img>
        </div>
        <div className='sm:w-2/4   flex flex-col justify-center relative  sm:p-20 p-10' >
          <h1 className=' text-6xl font-bold text-gray-800 ' >Turnos Online</h1>
          <p className=' text-gray-600' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque assumenda sed deleniti architecto, blanditiis quos aliquam eos similique, suscipit tempore veritatis illum autem consequatur optio velit ipsum quidem, eaque accusantium!</p>
         
          <img className='w-40 invisible sm:visible absolute bottom-5 right-0 ' src='https://res.cloudinary.com/dzqdjsrez/image/upload/v1714049268/ELDORAD222O_mzvmdr.png' ></img>
          
        </div>
    </div>
  )
}
