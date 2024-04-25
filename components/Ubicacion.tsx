import React from 'react';

export const Ubicacion = () => {
  return (
    <div className=' py-10 gap-8 m-auto sm:px-0 px-8 w-[100%] flex justify-center items-center flex-col'>
     <div className='shadow border-1 border-violet-200 rounded p-5 flex flex-col gap-4 ' >
      <h4 className='text-2xl font-semibold text-gray-800 '>Pionero Durian 239, Eldorado, Misiones </h4>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3573.3345219679254!2d-54.6442272!3d-26.4126793!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f77382936a8f95%3A0x5a60e51a684a18a6!2sCentro%20de%20Veterinaria%20y%20Zoonosis!5e0!3m2!1ses-419!2sar!4v1714048528156!5m2!1ses-419!2sar"
        
        height="300"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className=' sm:w-[700px]  w-[100%] '
      ></iframe>
      </div>
    </div>
  );
};
