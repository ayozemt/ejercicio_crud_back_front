import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import tripService from "../../services/trip.service";
import TripDetail from "../../components/TripDetail/TripDetail";
import { useNavigate } from "react-router-dom";

function TripDetailPage() {
  const { id } = useParams();
  const [trip, setTrip] = useState(null);

  const navigate = useNavigate();

  const getTrip = async () => {
    try {
      const response = await tripService.getOne(id);
      setTrip(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTrip = async (id) => {
    try {
        await tripService.delete(id);
        getTrip();
        navigate("/trips");
    } catch (error) {
        console.error(error);
    }
}

  useEffect(() => {
    getTrip();
  }, [id]);

  return (
    <div>
      <h1>Trip Detail</h1>
      {trip ? <TripDetail {...trip} getTrip={getTrip} deleteTrip={deleteTrip}/> : <p>Loading...</p>}
    </div>
  );
}

export default TripDetailPage;
