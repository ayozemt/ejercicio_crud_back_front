import { Link } from "react-router-dom";

function Trip({
  title,
  country,
  tripImg,
  startDate,
  endDate,
  budget,
  tasks,
  _id,
  deleteTrip,
}) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{country}</h6>
        <img src={tripImg} alt={title} />
        <br />
        <Link to={`/trips/${_id}`} className="btn btn-primary">
          View Trip
        </Link>
      </div>
    </div>
  );
}

export default Trip;
