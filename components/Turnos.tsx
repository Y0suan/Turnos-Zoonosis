import React from 'react'
import { ModalTurnoFelinos } from './ModalTurnoFelinos'
import { ModalTurnosCaninos } from './ModalTurnosCaninos'

export const Turnos = () => {
  return (
    <div className=' px-8 sm:px-20 py-20 h-auto ' >
        <div className='w-auto flex flex-col justify-center items-center'>
        <h2 className=' text-4xl font-bold ' >Solicita un Turno</h2>
        <p className=' sm:w-2/3 text-gray-600 ' >Estamos emocionados de presentarles nuestra nueva y fácil forma de solicitar turnos. ¿Necesitas una cita para tu mascota? ¡No hay problema! Selecciona a continuación la opcion deseada, completa con tus datos y listo!.. Recuerda seguir las recomendaciones indicadas luego de la generacion de turno. </p>
        </div>
        <div className='pt-8 flex flex-col sm:flex-row w-[100%] sm:justify-center gap-4' >
            <ModalTurnoFelinos/>
            <ModalTurnosCaninos/>
        </div>
    </div>
  )
}
