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
import Systemlog from "pages/Systemlogs";
import Userguide from "pages/userguide";
import Maindashboard from "pages/Maindashboard";
import HelpdeskForm from "pages/Help";

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
          path="/maindashboard"
          element={
            <DashboardLayout activeNav="Home" activeSubNav="Home">
              <Maindashboard />
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
        <Route
          path="/logs"
          element={
            <DashboardLayout activeNav="Admin"  activeSubNav="System Logs">
              <Systemlog />
            </DashboardLayout>
          }
        />
        <Route
          path="/guide"
          element={
            <DashboardLayout activeNav="Admin"  activeSubNav="User Guide">
              <Userguide />
            </DashboardLayout>
          }
        />
        <Route
          path="/help"
          element={
            <DashboardLayout activeNav="Admin"  activeSubNav="help">
              <HelpdeskForm />
            </DashboardLayout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;