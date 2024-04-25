"use client"
import React, { useState } from 'react';
import { Modal,SelectItem , ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, DatePicker, Select } from "@nextui-org/react";

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
      <div onClick={onOpen} className='cursor-pointer flex gap-7 shadow sm:w-2/5 border-gray-200 border-1 hover:border-violet-400 p-4 rounded'>
      <div className='rounded w-1/3 h-auto bg-gradient-to-r from-gray-300 to-gray-100' >
      </div>
      <div className='w-2/3'>
          <h3 className='font-semibold text-xl'>Turno Castración Caninos</h3>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quidem fugiat distinctio. Distinctio ex sit odio. </p>
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        placement="top-center"
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
                <Button  color="secondary" size="lg" className=' ' >
                  Martes <br></br>7:30
                </Button>
                <Button variant="faded" size="lg" color="secondary" >
                  Martes <br></br>9:00
                </Button>
                <Button  color="secondary" size="lg" >
                  Martes <br></br>14:30
                </Button>
                <Button  color="secondary" size="lg">
                  Jueves <br></br>7:30
                </Button>

                  {/* <Select label="Día" placeholder="Seleccione un día">
                    <SelectItem value="Martes">Martes</SelectItem>
                    <SelectItem value="Miércoles">Jueves</SelectItem>
                  </Select>
                  <Select label="Hora" placeholder="Seleccione un Horario">
                    <SelectItem value="7:30">7:30</SelectItem>
                    <SelectItem value="9:00">9:00</SelectItem>
                    <SelectItem value="14:30">14:30</SelectItem>
                  </Select> */}
                </>
              )}
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="flat" onClick={onClose}>
                Cancelar
              </Button>
              {(showFirstSection || showSecondSection) && (
                <Button color="primary" onClick={handleNextButtonClick}>
                  Siguiente
                </Button>
              )}
              {showThirdSection && (
                <Button color="primary" onClick={onClose}>
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
