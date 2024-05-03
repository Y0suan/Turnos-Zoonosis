"use client"
import React, { useState } from 'react';
import { Modal,SelectItem , ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, DatePicker, Select, Tooltip, Code, RadioGroup, Radio } from "@nextui-org/react";

export const ModalTurnoFelinos = () => {
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
      <div className='catFondo rounded sm:h-[100%] h-32  sm:w-32 w-[100%] bg-gradient-to-r from-gray-300 to-gray-100' >
      </div>
      <div className='sm:w-2/3'>
          <h3 className='font-semibold text-xl'>Turno Castración Felinos</h3>
          <p className='text-gray-600'>Te brindamos una herramienta eficaz y cómoda para que puedas solicitar turnos de manera rápida y sencilla en cualquier momento.</p>
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        placement="center"
      >
        
      </Modal>
    </>
  )
}
