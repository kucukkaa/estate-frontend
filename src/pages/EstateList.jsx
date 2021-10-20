import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Icon, Menu, Table } from "semantic-ui-react";
import EstateService from "../services/estateService";
import { getEstateById } from "../store/actions/estateActions";
import { useDispatch } from "react-redux";

export default function EstateList() {
  const [estates, setEstates] = useState([]);

  useEffect(() => {
    let estateService = new EstateService();
    estateService.getEstates().then((result) => setEstates(result.data.data));
  }, []);

  const dispatch = useDispatch();

  const handleGetEstateById = (estate) => {
    dispatch(getEstateById(estate));
  };

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Tür</Table.HeaderCell>
            <Table.HeaderCell>Kat</Table.HeaderCell>
            <Table.HeaderCell>Metre kare</Table.HeaderCell>
            <Table.HeaderCell>Şehir</Table.HeaderCell>
            <Table.HeaderCell>İlçe</Table.HeaderCell>
            <Table.HeaderCell>Isıtma Türü</Table.HeaderCell>
            <Table.HeaderCell>Oda Sayısı</Table.HeaderCell>
            <Table.HeaderCell>Fiyat</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {estates.map((estate) => (
            <Table.Row key={estate.id}>
              <Table.Cell>{estate.estateType.name}</Table.Cell>
              <Table.Cell>{estate.flat}</Table.Cell>
              <Table.Cell>{estate.size}</Table.Cell>
              <Table.Cell>{estate.city.name}</Table.Cell>
              <Table.Cell>{estate.district.name}</Table.Cell>
              <Table.Cell>{estate.typeOfHeating}</Table.Cell>
              <Table.Cell>{estate.room}</Table.Cell>
              <Table.Cell>{estate.price}</Table.Cell>
              <Table.Cell>
                <NavLink
                  to={`estates/${estate.id}`}
                  onClick={() => handleGetEstateById(estate)}
                >
                  Detay gör
                </NavLink>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="16">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
}
