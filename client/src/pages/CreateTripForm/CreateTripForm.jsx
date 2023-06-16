import { useState } from "react";
import tripService from "../../services/trip.service";
import { useNavigate } from "react-router-dom";

function CreateTripForm({ getTrips }) {
  const [data, setData] = useState({});

  const navigate = useNavigate();

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await tripService.create(data);
      getTrips();
      navigate("/trips");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Create Trip</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            onChange={handleChange}
            type="text"
            className="form-control"
            id="title"
            name="title"
          />

          <label htmlFor="country" className="form-label">
            Country
          </label>
          <input
            onChange={handleChange}
            type="text"
            className="form-control"
            id="country"
            name="country"
          />

          <label htmlFor="tripImg" className="form-label">
            Trip Image
          </label>
          <input
            onChange={handleChange}
            type="text"
            className="form-control"
            id="tripImg"
            name="tripImg"
          />

          <label htmlFor="startDate" className="form-label">
            Start Date
          </label>
          <input
            onChange={handleChange}
            type="date"
            className="form-control"
            id="startDate"
            name="startDate"
          />

          <label htmlFor="endDate" className="form-label">
            End Date
          </label>
          <input
            onChange={handleChange}
            type="date"
            className="form-control"
            id="endDate"
            name="endDate"
          />

          <label htmlFor="budget" className="form-label">
            Budget
          </label>
          <input
            onChange={handleChange}
            type="number"
            className="form-control"
            id="budget"
            name="budget"
          />

          <button type="submit" className="btn btn-primary">
            Create Trip
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateTripForm;
