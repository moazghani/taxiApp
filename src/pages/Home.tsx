import React from "react";
import Navbar from "../components/Navbar"; // Adjust path if necessary
import BookingForm from "../components/BookingForm"; // Adjust path if necessary

const Home = () => {
  return (
    <div className="home-container">
      <Navbar /> {/* Make sure this is here */}
      <h1></h1>
      <BookingForm />
    </div>
  );
};

export default Home;
