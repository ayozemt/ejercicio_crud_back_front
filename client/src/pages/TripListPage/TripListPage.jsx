import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import tripService from "../../services/trip.service";
import Trip from "../../components/Trip/Trip";
import { Routes, Route } from "react-router-dom";
import CreateTripForm from "../CreateTripForm/CreateTripForm";
import { useNavigate } from "react-router-dom";

function TripListPage() {
  const [trips, setTrips] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    getTrips();
  }, []);

  const getTrips = async () => {
    try {
      const response = await tripService.getAll();
      setTrips(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTrip = async (id) => {
    try {
      await tripService.delete(id);
      getTrips();
      navigate("/trips");
    } catch (error) {
      console.error(error);
    }
  };

  const renderTrips = () => {
    return trips.map((trip) => (
      <Trip key={trip._id} {...trip} deleteTrip={deleteTrip} />
    ));
  };

  return (
    <div className="TripListPage">
      <h1>Trips</h1>
      <Routes>
        <Route path="/trips/new" element={<CreateTripForm getTrips={getTrips} />} />
      </Routes>
      <Link to="/trips/new" className="btn btn-primary">
        Add Trip
      </Link>
      <div className="row">{trips && renderTrips()}</div>
    </div>
  );
}

export default TripListPage;
