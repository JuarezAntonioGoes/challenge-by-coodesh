import React, { useEffect, useState } from "react";
import axios from "axios";
import TableList from "../../components/TableList";
import { Col, Container, Row } from "react-bootstrap";
import InputSearch from "../../components/InputSearch";

const Home = () => {
  const [page, setPage] = useState(1);
  const [resultsNumber, setResultsNumber] = useState(50);
  const [patients, setPatients] = useState([]);
  const [isLoadingBtn, setIsLoadingBtn] = useState(false);
  const [filterByName, setFilterByName] = useState([]);
  const [gender, setGender] = useState("");

  useEffect(() => {
    if (page > 1) {
      setIsLoadingBtn(true);

      axios
        .get(
          `https://randomuser.me/api?page=${page}&results=${resultsNumber}&gender=${gender}`
        )
        .then((response) => {
          setPatients((state) => [...state, ...response.data.results]);
        })
        .catch((error) => console.log(error))
        .finally(() => {
          setIsLoadingBtn(false);
        });
    }
  }, [resultsNumber, page]);

  useEffect(() => {
    axios
      .get(
        `https://randomuser.me/api?page=1&results=${resultsNumber}&gender=${gender}`
      )
      .then((response) => {
        setPatients(response.data.results);
      })
      .catch((error) => console.log(error, "oi"));

    if (page !== 1) {
      setPage(1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gender]);

  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <Col md="8" className="d-flex justify-content-center flex-column">
          <InputSearch
            setGender={setGender}
            setFilterByName={setFilterByName}
            patients={patients}
          />

          <TableList
            filterByName={filterByName}
            patients={patients}
            setPage={setPage}
            isLoadingBtn={isLoadingBtn}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
