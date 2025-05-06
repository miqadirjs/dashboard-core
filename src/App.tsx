import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardLayout from "./components/layout/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Clients from "./pages/Clients";
import Users from "./pages/Users";
import Overview from "./pages/speakup/Overview";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./App.css";
import ReportDetails from "pages/speakup/ReportDetails";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <DashboardLayout activeNav="Home" activeSubNav="Dashboard">
              <Dashboard />
            </DashboardLayout>
          }
        />
        <Route
          path="/clients"
          element={
            <DashboardLayout activeNav="Admin" activeSubNav="My Clients">
              <Clients />
            </DashboardLayout>
          }
        />
        <Route
          path="/users"
          element={
            <DashboardLayout activeNav="Admin" activeSubNav="My Users">
              <Users />
            </DashboardLayout>
          }
        />
        <Route
          path="/speakup/overview"
          element={
            <DashboardLayout activeNav="SpeakUp+" activeSubNav="Overview">
              <Overview />
            </DashboardLayout>
          }
        />
        <Route
          path="/speakup/my-reports"
          element={
            <DashboardLayout activeNav="SpeakUp+" activeSubNav="my-reports">
              <ReportDetails />
            </DashboardLayout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;