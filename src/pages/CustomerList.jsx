import React, { useState, useEffect } from "react";
import CustomerService from "../services/customerService";
import { Icon, Menu, Table } from "semantic-ui-react";

export default function CustomerList() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    let customerService = new CustomerService();
    customerService
      .getCustomers()
      .then((result) => setCustomers(result.data.data));
  }, []);

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Adı</Table.HeaderCell>
            <Table.HeaderCell>Soyadı</Table.HeaderCell>
            <Table.HeaderCell>Telefon</Table.HeaderCell>
            <Table.HeaderCell>Cep Telefonu</Table.HeaderCell>
            <Table.HeaderCell>Mail</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {customers.map((customer) => (
            <Table.Row key={customer.id}>
              <Table.Cell>{customer.firstName}</Table.Cell>
              <Table.Cell>{customer.lastName}</Table.Cell>
              <Table.Cell>{customer.phoneNumber}</Table.Cell>
              <Table.Cell>{customer.mobile}</Table.Cell>
              <Table.Cell>{customer.email}</Table.Cell>
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
