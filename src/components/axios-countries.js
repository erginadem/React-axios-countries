import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Table } from "react-bootstrap";

const AxiosCountries = () => {
  const [countries, setCountries] = useState([]);

  const loadData = async () => {
    try {
      const resp = await axios.get("https://restcountries.com/v3.1/all");

      const arr = resp.data.map((item) => ({
        flag: item.flags.png,
        name: item.name.common,
        population: item.population,
        capital: item.capital?.join("-"), //birden fazla data olunca ? kullaniyoruz
      }));

      setCountries(arr);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Col md={8}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>index</th>
                  <th>Flag</th>
                  <th>Name</th>
                  <th>Population</th>
                  <th>Capital</th>
                </tr>
              </thead>

              <tbody>
                {countries.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <img src={item.flag} style={{ width: "50px" }} />
                    </td>
                    <td>{item.name}</td>
                    <td>{item.population}</td>
                    <td>{item.capital}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AxiosCountries;
