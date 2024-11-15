import React from "react";
import { Box, Typography } from "@mui/material";
import "../index.css"; // Global styles

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh", // Ensures the container takes full screen height
        width: "100%",
        backgroundImage: "url('/BG booking form.jpg')", // Apply background image to the entire container
        backgroundSize: "cover", // Ensures background covers the entire area
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Left Side - Title and Motto */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "flex-start", // Align text to the left
          alignItems: "flex-start", // Align the title to the top initially
          paddingLeft: "5%", // Padding from left
          paddingTop: { xs: "25%", sm: "20%" }, // Adjust padding top for mobile
          zIndex: 5, // Ensure title stays above other elements
          position: "relative",
        }}
      >
        {/* Title */}
        <Typography
          variant="h1"
          sx={{
            color: "white",
            fontSize: { xs: "3rem", sm: "4rem", md: "6rem" },
            fontWeight: "bold",
            whiteSpace: "nowrap",
            position: "absolute",
            top: { xs: "25%", sm: "50%" }, // Set top to 0 for mobile, 50% for larger screens
            left: "5%", // Align title to the left
            transform: "translateY(-50%)", // Center title vertically based on its height
          }}
          className="title-text"
        >
          SMAZ SERVICES
        </Typography>

        {/* Motto Text */}
        <Typography
          variant="h6"
          sx={{
            color: "white",
            fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
            fontWeight: "bold", // Made it bold
            position: "absolute",
            top: { xs: "31%", sm: "75%", md: "65%" }, // Adjusted top for mobile to move motto further up
            left: "5%", // Align motto to the left
            transform: "translateY(-50%)", // Center motto vertically
            width: { xs: "150%", sm: "95%" }, // Set width for mobile to 80%, and 95% for larger screens
            textAlign: "left", // Align text to the left
            fontFamily: "'Cursive', 'Times New Roman', serif", // Added a more quote-like font style
            fontStyle: "italic", // Apply italic style to make it look like a quote
          }}
        >
          Wherever you go, we'll take the flow, with Smaz Services, you're ready to go!
        </Typography>
      </Box>

      {/* Right Side - Booking Form Removed */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center", // Horizontally center the form
          alignItems: "center", // Vertically center the form
          position: "relative",
          zIndex: 10,
          backgroundColor: "transparent", // No background on the right side
          height: "100vh", // Full height of the screen
          paddingTop: { xs: "100%", sm: "3%" }, // Move the form down on mobile (xs), leave it centered on larger screens
        }}
        className="booking-form-container" // Added class for mobile centering
      >
        {/* Booking Form is now removed */}
      </Box>
    </Box>
  );
};

export default Home;
