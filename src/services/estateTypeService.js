import axios from "axios";

export default class EstateTypeService {
  getEstateTypies() {
    return axios.get("http://localhost:8080/api/estatetypies/getall");
  }
}
