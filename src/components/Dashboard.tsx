import Header from "./Header";

import { useAuth } from "../context/AuthContext";
// import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const { logOut } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit() {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log("Error : ", error);
    }
  }
  return (
    <>
      <Header />
      <section className="pt-8">
        <h1>Dashboard</h1>
        <button className="btn btn primary" onClick={handleSubmit}>
          Log Out
        </button>
      </section>
    </>
  );
}

export default Dashboard;
