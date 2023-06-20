import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import tripService from "../../services/trip.service";
import Trip from "../../components/Trip/Trip";
import { Routes, Route } from "react-router-dom";
import CreateTripForm from "../CreateTripForm/CreateTripForm";
import { useContext } from "react";
import { ThemeContext } from "../../context/theme.context";

function TripListPage() {
  const [trips, setTrips] = useState(null);
  const { theme } = useContext(ThemeContext);

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
    <div className={"ProjectsPage " + theme}>
      <h1>Trips</h1>
      <Routes>
        <Route path="/trips/new" element={<CreateTripForm getTrips={getTrips} />} />
      </Routes>
      <Link to="/trips/new" className="btn btn-primary">
        Add Trip
      </Link>
      <div className="d-flex flex-wrap">{trips && renderTrips()}</div>
    </div>
  );
}

export default TripListPage;
