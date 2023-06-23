import axios from "axios";

class TripService {
  constructor() {
    this.api = axios.create({
      baseURL: "http://localhost:5005/api/trips",
    });

    this.api.interceptors.request.use((config) => {
      const storedToken = localStorage.getItem("authToken");

      if (storedToken) {
        config.headers = {
          Authorization: `Bearer ${storedToken}`,
        };
      }
      return config;
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
