import { useState } from "react";
import { useNavigate } from "react-router-dom";
import tripService from "../../services/trip.service";
import { useParams } from "react-router-dom";

function EditTripForm({ title, country, tripImg, startDate, endDate, budget, getTrip }) {
  const { id } = useParams();

  const [data, setData] = useState({
    title,
    country,
    tripImg,
    startDate,
    endDate,
    budget,
    id
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await tripService.edit(id, data);
      getTrip();
      navigate(`/trips/${id}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Edit Trip</h1>
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
            value={data.title}
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
            value={data.country}
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
            value={data.tripImg}
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
            value={data.startDate}
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
            value={data.endDate}
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
            value={data.budget}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default EditTripForm;
