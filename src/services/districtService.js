import axios from "axios";

export default class DistrictService {
  getDistricts() {
    return axios.get("http://localhost:8080/api/districts/getall");
  }
}
