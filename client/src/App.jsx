import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import TripListPage from "./pages/TripListPage/TripListPage";
import CreateTripForm from "./pages/CreateTripForm/CreateTripForm";
import TripDetailPage from "./pages/TripDetailPage/TripDetailPage";
import EditTripForm from "./pages/EditTripForm/EditTripForm";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import IsPrivate from "./components/IsPrivate";
import IsAnon from "./components/IsAnon";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/about" element={<AboutPage />} />

        <Route
          path="/trips"
          element={
            <IsPrivate>
              <TripListPage />
            </IsPrivate>
          }
        />

        <Route
          path="/trips/new"
          element={
            <IsPrivate>
              <CreateTripForm />
            </IsPrivate>
          }
        />

        <Route
          path="/trips/:id"
          element={
            <IsPrivate>
              <TripDetailPage />
            </IsPrivate>
          }
        />

        <Route
          path="/trips/:id/edit"
          element={
            <IsPrivate>
              <EditTripForm />
            </IsPrivate>
          }
        />

        <Route
          path="/signup"
          element={
            <IsAnon>
              <SignupPage />
            </IsAnon>
          }
        />

        <Route
          path="/login"
          element={
            <IsAnon>
              <LoginPage />
            </IsAnon>
          }
        />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
