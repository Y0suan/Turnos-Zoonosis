"use client"
import React, { useState } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, RadioGroup, Radio, Code } from "@nextui-org/react";

export const ModalTurnosCaninos = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showFirstSection, setShowFirstSection] = useState(true);
  const [showSecondSection, setShowSecondSection] = useState(false);
  const [showThirdSection, setShowThirdSection] = useState(false);
  const [formData, setFormData] = useState({
    nombreApellido: "",
    direccion: "",
    dni: "",
    barrio: "",
    nombreMascota: "",
    razaEstilo: "",
    sexo: "",
    edad: "",
    tallaTamano: "",
    turno: ""
  });
  const [showCongratsMessage, setShowCongratsMessage] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNextButtonClick = () => {
    if (showFirstSection) {
      setShowFirstSection(false);
      setShowSecondSection(true);
    } else if (showSecondSection) {
      setShowSecondSection(false);
      setShowThirdSection(true);
    }
  };

  const handleSubmit = () => {
    localStorage.setItem('formData', JSON.stringify(formData));
    setShowCongratsMessage(true);
    console.log('Formulario enviado:', formData);
  };

  return (
    <>
      <div onClick={onOpen} className='flex flex-col sm:flex-row sm:py-10 cursor-pointer gap-7 shadow sm:w-2/5 border-gray-200 border-1 hover:border-violet-400 p-4 rounded'>
        <div className=' dogFondo rounded sm:h-[100%] h-32  sm:w-32 w-[100%] bg-gradient-to-r from-gray-300 to-gray-100' >
        </div>
        <div className='sm:w-2/3'>
          <h3 className='font-semibold text-xl'>Turno Castración Caninos</h3>
          <p className='text-gray-600'>Te brindamos una herramienta eficaz y cómoda para que puedas solicitar turnos de manera rápida y sencilla en cualquier momento. </p>
        
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        placement="center"
      >
        <ModalContent>
          <>
            <ModalHeader className="flex flex-col gap-1">Solicita Un Turno De Castración Canina</ModalHeader>
            <Code color="primary" className='text-center rounded-none' >Demo actual no permite solicitar turno.</Code>

            <ModalBody>
              {showCongratsMessage ? (
                <>
                <h2>Felicitaciones {formData.nombreApellido}, ya reservaste un turno para {formData.nombreMascota}.</h2>
                </>
              ) : (
                <>
                  {showFirstSection && (
                    <>
                  <Input
                    name="nombreApellido"
                    label="Nombre y Apellido"
                    placeholder=""
                    variant="bordered"
                    value={formData.nombreApellido}
                    onChange={handleInputChange}
                  />
                  <Input
                    name="direccion"
                    label="Dirección"
                    placeholder=""
                    variant="bordered"
                    value={formData.direccion}
                    onChange={handleInputChange}
                  />
                  <Input
                    name="dni"
                    label="DNI"
                    placeholder=""
                    variant="bordered"
                    value={formData.dni}
                    onChange={handleInputChange}
                  />
                  <Input
                    name="barrio"
                    label="Barrio"
                    placeholder=""
                    variant="bordered"
                    value={formData.barrio}
                    onChange={handleInputChange}
                  />
                    </>
                  )}
                  {showSecondSection && (
                    <>
     <Input
                    name="nombreMascota"
                    label="Nombre Mascota"
                    placeholder=""
                    variant="bordered"
                    value={formData.nombreMascota}
                    onChange={handleInputChange}
                  />
                  <Input
                    name="razaEstilo"
                    label="Raza o Estilo"
                    placeholder=""
                    variant="bordered"
                    value={formData.razaEstilo}
                    onChange={handleInputChange}
                  />
                  <Input
                    name="sexo"
                    label="Sexo"
                    placeholder=""
                    variant="bordered"
                    value={formData.sexo}
                    onChange={handleInputChange}
                  />
                  <Input
                    name="edad"
                    label="Edad"
                    placeholder=""
                    variant="bordered"
                    value={formData.edad}
                    onChange={handleInputChange}
                  />
                  <Input
                    name="tallaTamano"
                    label="Talla Tamaño"
                    placeholder=""
                    variant="bordered"
                    value={formData.tallaTamano}
                    onChange={handleInputChange}
                  />
                    </>
                  )}
                  {showThirdSection && (
                    <>
                    <RadioGroup label="Turnos Disponibles" description=" ">
                    <Radio description="7:30" value="Martes-7:30">
                      Martes
                    </Radio>
                    <Radio description="9:00" value="Martes-9:00">
                      Martes
                    </Radio>
                    <Radio isDisabled description="14:30" value="Martes-14:30">
                      Martes
                    </Radio>
                    <Radio description="7:30" value="Jueves-7:30">
                      Jueves
                    </Radio>
                    <Radio description="9:00" value="Jueves-9:00">
                      Jueves
                    </Radio>
                  </RadioGroup>
                    </>
                  )}
                </>
              )}
            </ModalBody>
            <ModalFooter>
              {(showFirstSection || showSecondSection) && (
                <Button radius="sm" color="primary" onClick={handleNextButtonClick}>
                  Siguiente
                </Button>
              )}
              {showThirdSection && (
                <Button radius="sm" color="primary" onClick={handleSubmit}>
                  Finalizar
                </Button>
              )}
            </ModalFooter>
          </>
        </ModalContent>
      </Modal>
    </>
  )
}
