import axios from "axios";
const storedToken = localStorage.getItem("authToken");

class TripService {
  constructor() {
    this.api = axios.create({
      baseURL: "http://localhost:5005/api/trips",
      headers: { Authorization: `Bearer ${storedToken}` },
    });
  }

  create(data) {
    return this.api.post("/", data);
  }

  edit(id, data) {
    return this.api.put(`/${id}`, data);
  }

  delete(id) {
    return this.api.delete(`/${id}`);
  }

  getAll() {
    return this.api.get("/");
  }

  getOne(id) {
    return this.api.get(`/${id}`);
  }
}

const tripService = new TripService();

export default tripService;
