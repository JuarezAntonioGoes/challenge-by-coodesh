import React from 'react'
import { Table } from 'react-bootstrap'
import { IconArrowCircle } from './style';

const TableList = ({ setPage, patients = [], isLoadingBtn }) => {

    console.log(patients);
    const formatData = (dataParam) => {
        const data = dataParam.split('T')[0]
        const dataArr = data.split('-')
        return `${dataArr[2]}/${dataArr[1]}/${dataArr[0]}`
    }

    return (
        <>
            <Table bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Birth</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {patients.length ? patients.map(({ name, gender, dob }, index) => (
                        <tr key={index}>
                            <td>{`${name.first} ${name.last}`}</td>
                            <td>{gender}</td>
                            <td>{formatData(dob.date)}</td>
                        </tr>
                    )) : <tr></tr>}
                </tbody>
            </Table>

            <button onClick={() => setPage(state => state + 1)}> <IconArrowCircle isLoadingBtn={isLoadingBtn} ><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="sc-bdnxRM fDPECZ" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.83 6.706a5 5 0 00-7.103-3.16.5.5 0 11-.454-.892A6 6 0 112.545 5.5a.5.5 0 11.91.417 5 5 0 109.375.789z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M7.854.146a.5.5 0 00-.708 0l-2.5 2.5a.5.5 0 000 .708l2.5 2.5a.5.5 0 10.708-.708L5.707 3 7.854.854a.5.5 0 000-.708z" clip-rule="evenodd"></path></svg></IconArrowCircle> Loading more...</button>
        </>
    )
}

export default React.memo(TableList)
