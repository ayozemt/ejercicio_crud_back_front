import React from "react";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import EditTripForm from "../../pages/EditTripForm/EditTripForm";

function TripDetail({ title, country, tripImg, startDate, endDate, budget, tasks, _id, deleteTrip, getTrip }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{country}</h6>
        <img src={tripImg} alt={title} />
        <p className="card-text">From: {startDate}</p>
        <p className="card-text">To: {endDate}</p>
        <p className="card-text">{budget}€</p>
        <p className="card-text">{tasks}</p>
        <br />
        <Routes>
            <Route path="/trips/:id/edit" element={<EditTripForm getTrip={getTrip} trip={{ title, country, tripImg, startDate, endDate, budget, tasks, _id }} />} />
        </Routes>
        <Link to={`/trips/${_id}/edit`} className="btn btn-primary">
            Edit Trip
        </Link>
        <button onClick={() => deleteTrip(_id)} className="btn btn-danger">
            Delete Trip
        </button>
      </div>
    </div>
  );
}

export default TripDetail;