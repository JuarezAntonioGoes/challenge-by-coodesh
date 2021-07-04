import React, { useRef } from 'react'
import { IoClose } from "react-icons/io5";
import { BackgroundModal, ButtonClose, ContainerModal, PicturePatient } from './style'

const ModalPacient = ({ patient, closeModal }) => {

    const formatData = (dataParam) => {
        const data = dataParam.split('T')[0]
        const dataArr = data.split('-')
        return `${dataArr[2]}/${dataArr[1]}/${dataArr[0]}`
    }

    const clickOutModal = (e) => {
        if (e.target === e.currentTarget) {
            closeModal()
        }
    }

    return (
        <>
            <BackgroundModal onClick={clickOutModal}>
                <ContainerModal>
                    <ButtonClose onClick={closeModal}>
                        <IoClose />
                    </ButtonClose>

                    <PicturePatient src={patient?.picture.large} />

                    <h2>{patient?.name.first} {patient?.name.last}</h2>

                    <p>Email: {patient?.email}</p>
                    <p>Gender: {patient?.gender}</p>
                    {patient && <p>Birth date: {formatData(patient?.dob.date)}</p>}
                    <p>Phone: {patient?.phone}</p>
                    <p>Nationality: {patient?.location.country}</p>
                    <p>City: {patient?.location.city}</p>
                    <p>Address: {patient?.location.street.name},  {patient?.location.street.number}</p>
                    <p>ID: {patient?.id.name}</p>

                </ContainerModal>
            </BackgroundModal>
        </>
    )
}

export default ModalPacient
