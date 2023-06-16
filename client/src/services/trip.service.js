import axios from "axios";

class TripService {
    constructor() {
        this.api = axios.create({
            baseURL: "http://localhost:5005/api/trips"
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