import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import tripService from "../../services/trip.service";
import TripDetail from "../../components/TripDetail/TripDetail";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../context/theme.context";

function TripDetailPage() {
  const { theme } = useContext(ThemeContext);
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
    <div className={"Homepage " + theme}>
      <h1>Trip Detail</h1>
      {trip ? <TripDetail {...trip} getTrip={getTrip} deleteTrip={deleteTrip} id={id}/> : <p>Loading...</p>}
    </div>
  );
}

export default TripDetailPage;
