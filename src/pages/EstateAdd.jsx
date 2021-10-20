import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Form, Input, Dropdown } from "semantic-ui-react";
import DistrictService from "../services/districtService";
import CustomerService from "../services/customerService";
import EstateTypeService from "../services/estateTypeService";
import EstateService from "../services/estateService";
import CityService from "../services/cityService";
import { useHistory } from "react-router";

export default function EstateAdd() {
  let estateService = new EstateService();

  const history = useHistory();

  function goToHomeAfterAdd() {
    history.push("/");
  }

  const initialValues = {
    price: "",
    flat: "",
    size: "",
    estateType: { id: "" },
    city: { id: "" },
    customerId: "",
    district: { id: "" },
    room: "",
    typeOfHeating: "",
  };

  const schema = Yup.object({
    price: Yup.number().required("Ürün fiyatı zorunludur"),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: schema,
    onSubmit: (values) => {
      console.log(values);
      estateService.addEstate(values);
      goToHomeAfterAdd();
    },
  });

  const handleChangeSemantic = (value, fieldName) => {
    formik.setFieldValue(fieldName, value);
  };

  const [districts, setDistricts] = useState([]);

  useEffect(() => {
    let districtService = new DistrictService();
    districtService
      .getDistricts()
      .then((result) => setDistricts(result.data.data));
  }, []);

  const districtOptions = districts.map((district, index) => ({
    id: index,
    key: index,
    value: district.id,
    text: `${district.name}/${district.city.name}`,
  }));

  const District = () => (
    <Dropdown
      clearable
      item
      placeholder="İlçe/İl"
      search
      selection
      onChange={(e, data) => handleChangeSemantic(data.value, "district.id")}
      options={districtOptions}
      value={formik.values.district.id}
    />
  );

  const [cities, setCities] = useState([]);

  useEffect(() => {
    let cityService = new CityService();
    cityService.getCities().then((result) => setCities(result.data.data));
  }, []);

  const cityOptions = cities.map((city, index) => ({
    id: index,
    key: index,
    value: city.id,
    text: city.name,
  }));

  const City = () => (
    <Dropdown
      clearable
      item
      placeholder="il"
      search
      selection
      onChange={(e, data) => handleChangeSemantic(data.value, "city.id")}
      options={cityOptions}
      value={formik.values.city.id}
    />
  );

  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    let customerService = new CustomerService();
    customerService
      .getCustomers()
      .then((result) => setCustomers(result.data.data));
  }, []);

  const customerOptions = customers.map((customer, index) => ({
    id: index,
    key: index,
    value: customer.id,
    text: `${customer.firstName} ${customer.lastName}`,
  }));

  const Customer = () => (
    <Dropdown
      clearable
      item
      placeholder="Müşteri"
      search
      selection
      onChange={(e, data) => handleChangeSemantic(data.value, "customerId")}
      options={customerOptions}
      value={formik.values.customerId}
    />
  );

  const [estateTypies, setEstateTypies] = useState([]);

  useEffect(() => {
    let estateTypeService = new EstateTypeService();
    estateTypeService
      .getEstateTypies()
      .then((result) => setEstateTypies(result.data.data));
  }, []);

  const estateTypeOptions = estateTypies.map((estateType, index) => ({
    id: index,
    key: index,
    value: estateType.id,
    text: estateType.name,
  }));

  const EstateType = () => (
    <Dropdown
      clearable
      item
      placeholder="Tür"
      search
      selection
      onChange={(e, data) => handleChangeSemantic(data.value, "estateType.id")}
      options={estateTypeOptions}
      value={formik.values.estateType.id}
    />
  );

  return (
    <div className="container">
      <Form className="ui form" onSubmit={formik.handleSubmit}>
        <Form.Field>
          <Input
            name="price"
            placeholder="Fiyat"
            value={formik.values.price}
            onChange={formik.handleChange}
          ></Input>
        </Form.Field>
        <Form.Field>
          <Input
            name="size"
            placeholder="Metrekare"
            value={formik.values.size}
            onChange={formik.handleChange}
          ></Input>
        </Form.Field>
        <Form.Field>
          <District />
        </Form.Field>
        <Form.Field>
          <City />
        </Form.Field>
        <Form.Field>
          <Customer />
        </Form.Field>
        <Form.Field>
          <EstateType />
        </Form.Field>
        <Form.Field>
          <Input
            name="room"
            placeholder="Oda ve Salon sayısı"
            value={formik.values.room}
            onChange={formik.handleChange}
          ></Input>
        </Form.Field>
        <Form.Field>
          <Input
            name="typeOfHeating"
            placeholder="Isıtma tipi"
            value={formik.values.typeOfHeating}
            onChange={formik.handleChange}
          ></Input>
        </Form.Field>
        <Form.Field>
          <Input
            name="flat"
            placeholder="Kat"
            value={formik.values.flat}
            onChange={formik.handleChange}
          ></Input>
        </Form.Field>
        <Button color="blue" type="submit">
          Kaydet
        </Button>
      </Form>
    </div>
  );
}
