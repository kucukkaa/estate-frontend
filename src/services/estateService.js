import axios from "axios";

export default class EstateService {
  getEstates() {
    return axios.get("http://localhost:8080/api/estates/getall");
  }

  getEstateById(id) {
    return axios.get(
      "http://localhost:8080/api/estates/getestatebyid?id=" + id
    );
  }

  getEstatesByTypeId(estateTypeId) {
    return axios.get(
      "http://localhost:8080/api/estates/getbyestatetypeid?estateTypeId=" +
        estateTypeId
    );
  }

  addEstate(estate) {
    return axios.post("http://localhost:8080/api/estates/add", estate);
  }
}
