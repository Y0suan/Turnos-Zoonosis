"use client"
import React, { useState } from 'react';
import { Modal,SelectItem ,ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, DatePicker, Select, Code, RadioGroup, Radio } from "@nextui-org/react";

export const ModalTurnosCaninos = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showFirstSection, setShowFirstSection] = useState(true);
  const [showSecondSection, setShowSecondSection] = useState(false);
  const [showThirdSection, setShowThirdSection] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleNextButtonClick = () => {
    if (showFirstSection) {
      setShowFirstSection(false);
      setShowSecondSection(true);
    } else if (showSecondSection) {
      setShowSecondSection(false);
      setShowThirdSection(true);
    }
  };

  return (
    <>
      <div onClick={onOpen} className='flex flex-col sm:flex-row sm:py-10 cursor-pointer gap-7 shadow sm:w-2/5 border-gray-200 border-1 hover:border-violet-400 p-4 rounded'>
      <div className=' dogFondo rounded sm:h-[100%] h-32  sm:w-32 w-[100%] bg-gradient-to-r from-gray-300 to-gray-100' >
      </div>
      <div className='sm:w-2/3'>
          <h3 className='font-semibold text-xl'>Turno Castración Caninos</h3>
          <p className='text-gray-600'>"Te brindamos una herramienta eficaz y cómoda para que puedas solicitar turnos de manera rápida y sencilla en cualquier momento." </p>
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        placement="center"
      >
        <ModalContent>
          <>
            <ModalHeader className="flex flex-col gap-1">Solicita Un Turno De Castracion Canina</ModalHeader>
            <ModalBody>
              {showFirstSection && (
                <>
                  <Input
                    autoFocus
                    label="Nombre y Apellido"
                    placeholder=""
                    variant="bordered"
                  />
                  <Input
                    label="Dirección"
                    placeholder=""
                    variant="bordered"
                  />
                  <Input
                    label="DNI"
                    placeholder=""
                    variant="bordered"
                  />
                  <Input
                    label="Barrio"
                    placeholder=""
                    variant="bordered"
                  />
                </>
              )}
              {showSecondSection && (
                <>
                  <Input
                    label="Nombre Mascota"
                    placeholder=""
                    variant="bordered"
                  />
                  <Input
                    label="Raza o Estilo"
                    placeholder=""
                    variant="bordered"
                  />
                  <Input
                    label="Sexo"
                    placeholder=""
                    variant="bordered"
                  />
                  <Input
                    label="Edad"
                    placeholder=""
                    variant="bordered"
                  />
                  <Input
                    label="Talla Tamaño"
                    placeholder=""
                    variant="bordered"
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
                <Radio  isDisabled description="14:30" value="MArtes-14:30">
                  Martes
                </Radio>
                <Radio
                description="7:30"
                value="Jueves-7:30"
                >
                Jueves
                </Radio>
                <Radio description="9:00" value="Jueves-9:00">
                  Jueves
                </Radio>
                </RadioGroup>
                </>
              )}
            </ModalBody>
            <ModalFooter>
              {/* <Button color="danger" radius="sm" variant="flat" onClick={onClose}>
                Cancelar
              </Button> */}
              {(showFirstSection || showSecondSection) && (
                <Button radius="sm" color="primary" onClick={handleNextButtonClick}>
                  Siguiente
                </Button>
              )}
              {showThirdSection && (
                <Button radius="sm" color="primary" onClick={onClose}>
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
