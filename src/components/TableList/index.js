import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { ButtonViewAction, IconArrowCircle } from "./style";
import { IoMdListBox } from "react-icons/io";
import ModalPacient from "../ModalPacient";

const TableList = ({
  setPage,
  patients = [],
  isLoadingBtn,
  filterByName = [],
}) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [viewPatient, setViewPatient] = useState({});

  const formatData = (dataParam) => {
    const data = dataParam.split("T")[0];
    const dataArr = data.split("-");
    return `${dataArr[2]}/${dataArr[1]}/${dataArr[0]}`;
  };

  const activeModal = (patient) => {
    setViewPatient(patient);
    setIsShowModal(true);
  };

  return (
    <>
      <Table bordered hover className="mb-3 mt-5">
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Birth</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filterByName.length ? (
            filterByName.map((patient, index) => (
              <tr key={index}>
                <td>{`${patient.name.first} ${patient.name.last}`}</td>
                <td>{patient.gender}</td>
                <td>{formatData(patient.dob.date)}</td>
                <td className="d-flex justify-content-center">
                  <ButtonViewAction
                    className="btn btn-primary"
                    onClick={() => activeModal(patient)}
                  >
                    <IoMdListBox />
                  </ButtonViewAction>
                </td>
              </tr>
            ))
          ) : (
            <>
              {patients.length ? (
                patients.map((patient, index) => (
                  <tr key={index}>
                    <td>{`${patient.name.first} ${patient.name.last}`}</td>
                    <td>{patient.gender}</td>
                    <td>{formatData(patient.dob.date)}</td>
                    <td className="d-flex justify-content-center">
                      <ButtonViewAction
                        className="btn btn-primary"
                        onClick={() => activeModal(patient)}
                      >
                        <IoMdListBox />
                      </ButtonViewAction>
                    </td>
                  </tr>
                ))
              ) : (
                <tr></tr>
              )}
            </>
          )}
        </tbody>
      </Table>

      {isShowModal && (
        <ModalPacient
          closeModal={() => setIsShowModal(false)}
          patient={viewPatient}
        />
      )}

      <button
        className="btn mb-5"
        onClick={() => setPage((state) => state + 1)}
      >
        {" "}
        <IconArrowCircle
          src="./assets/svg/arrow-circle.svg"
          isLoadingBtn={isLoadingBtn}
        />{" "}
        Loading more...
      </button>
    </>
  );
};

export default React.memo(TableList);
