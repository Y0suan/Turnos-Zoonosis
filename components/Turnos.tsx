import React from 'react'
import { ModalTurnoFelinos } from './ModalTurnoFelinos'
import { ModalTurnosCaninos } from './ModalTurnosCaninos'

export const Turnos = () => {
  return (
    <div className=' px-8 sm:px-20 py-20 h-auto ' >
        <div className='w-auto flex flex-col justify-center items-center'>
        <h2 className=' text-4xl font-bold ' >Solicita un Turno</h2>
        <p className=' sm:w-2/3 text-gray-600 ' >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum dolorum blanditiis esse minus voluptates iste quo harum laboriosam dolores et, necessitatibus suscipit, ducimus omnis dignissimos. Quidem mollitia eveniet </p>
        </div>
        <div className='pt-8 flex flex-col sm:flex-row w-[100%] sm:justify-center gap-4' >
            <ModalTurnoFelinos/>
            <ModalTurnosCaninos/>
        </div>
    </div>
  )
}
