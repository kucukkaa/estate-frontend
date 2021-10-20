import axios from "axios";

export default class CustomerService {
  getCustomers() {
    return axios.get("http://localhost:8080/api/customers/getall");
  }
}
