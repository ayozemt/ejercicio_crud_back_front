import './App.css';
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import TripListPage from "./pages/TripListPage/TripListPage";
import CreateTripForm from "./pages/CreateTripForm/CreateTripForm";
import TripDetailPage from './pages/TripDetailPage/TripDetailPage';
import EditTripForm from './pages/EditTripForm/EditTripForm';

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Routes>
        <Route  path="/" element={<HomePage />} />

        <Route path="/about" element={<AboutPage />} />

        <Route path="/trips" element={<TripListPage />} />

        <Route path="/trips/new" element={<CreateTripForm />} />

        <Route path="/trips/:id" element={<TripDetailPage />} />

        <Route path="/trips/:id/edit" element={<EditTripForm />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>      
    </div>
  );
}

export default App;
