import React, { useState } from "react";
import { Avatar, Box, Button, Container, CssBaseline, Grid, TextField, Typography, InputAdornment, IconButton, FormControl, Select, MenuItem, InputLabel } from "@mui/material";
import { LockOutlined, Visibility, VisibilityOff } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import HomeIcon from '@mui/icons-material/Home'; // Home icon

const countryCodes = [
  { code: "+1", flag: "🇺🇸" },
  { code: "+49", flag: "🇩🇪" },
  { code: "+44", flag: "🇬🇧" },
  // Add more countries here
];

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedCountryCode, setSelectedCountryCode] = useState("+49");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMessages, setErrorMessages] = useState({ name: "", email: "", password: "", confirmPassword: "", phoneNumber: "" });
  const navigate = useNavigate();

  const handleRegister = async () => {
    setErrorMessages({ name: "", email: "", password: "", confirmPassword: "", phoneNumber: "" });
    let valid = true;
    
    if (!name) {
      setErrorMessages((prev) => ({ ...prev, name: "Name is required" }));
      valid = false;
    }
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setErrorMessages((prev) => ({ ...prev, email: "Valid email is required" }));
      valid = false;
    }
    if (!password) {
      setErrorMessages((prev) => ({ ...prev, password: "Password is required" }));
      valid = false;
    }
    if (password !== confirmPassword) {
      setErrorMessages((prev) => ({ ...prev, confirmPassword: "Passwords do not match" }));
      valid = false;
    }
    if (!phoneNumber || !/^\d+$/.test(phoneNumber)) {
      setErrorMessages((prev) => ({ ...prev, phoneNumber: "Phone number must be numbers only" }));
      valid = false;
    }

    if (valid) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        console.log("Registration successful");
        navigate("/home");
      } catch (error) {
        console.error("Error registering:", error.message);
        setErrorMessages((prev) => ({ ...prev, email: "Error registering user. Please try again." }));
      }
    }
  };

  return (
    <>
      <CssBaseline />
      <Container maxWidth={false} disableGutters sx={{ position: "relative", backgroundImage: 'url("/login-register page background.jpg")', backgroundSize: "cover", backgroundPosition: "center", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Box sx={{ width: "100%", maxWidth: 600, display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "rgba(0, 0, 0, 0.8)", borderRadius: 2, padding: 3 }}>
          {/* Home icon positioned at the top-left corner */}
          <IconButton component={Link} to="/home" sx={{ position: "absolute", top: 20, left: 20, color: "#ffffff", fontSize: 40 }}>
            <HomeIcon />
          </IconButton>
          
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <LockOutlined />
          </Avatar>
          <Typography variant="h5" sx={{ color: "#ffffff", mb: 1 }}>
            Register
          </Typography>
          <Box sx={{ mt: 1, width: "100%" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  fullWidth
                  name="name"
                  label="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  error={!!errorMessages.name}
                  helperText={errorMessages.name}
                  InputLabelProps={{ style: { color: "#ffffff" } }}
                  InputProps={{
                    style: { color: "#ffffff" },
                    sx: { "& .MuiOutlinedInput-notchedOutline": { borderColor: "#ffffff" } },
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  fullWidth
                  name="email"
                  label="Email Address"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={!!errorMessages.email}
                  helperText={errorMessages.email}
                  InputLabelProps={{ style: { color: "#ffffff" } }}
                  InputProps={{
                    style: { color: "#ffffff" },
                    sx: { "& .MuiOutlinedInput-notchedOutline": { borderColor: "#ffffff" } },
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <InputLabel sx={{ color: "#ffffff" }}>Country Code</InputLabel>
                  <Select
                    value={selectedCountryCode}
                    onChange={(e) => setSelectedCountryCode(e.target.value)}
                    sx={{ color: "#ffffff", "& .MuiOutlinedInput-notchedOutline": { borderColor: "#ffffff" } }}
                  >
                    {countryCodes.map(({ code, flag }, index) => (
                      <MenuItem key={index} value={code}>{flag} {code}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  fullWidth
                  name="phoneNumber"
                  label="Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  error={!!errorMessages.phoneNumber}
                  helperText={errorMessages.phoneNumber}
                  InputLabelProps={{ style: { color: "#ffffff" } }}
                  InputProps={{
                    style: { color: "#ffffff" },
                    sx: { "& .MuiOutlinedInput-notchedOutline": { borderColor: "#ffffff" } },
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  error={!!errorMessages.password}
                  helperText={errorMessages.password}
                  InputLabelProps={{ style: { color: "#ffffff" } }}
                  InputProps={{
                    style: { color: "#ffffff" },
                    sx: { "& .MuiOutlinedInput-notchedOutline": { borderColor: "#ffffff" } },
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton aria-label="toggle password visibility" onClick={() => setShowPassword(!showPassword)} edge="end" sx={{ color: "white" }}>
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  error={!!errorMessages.confirmPassword}
                  helperText={errorMessages.confirmPassword}
                  InputLabelProps={{ style: { color: "#ffffff" } }}
                  InputProps={{
                    style: { color: "#ffffff" },
                    sx: { "& .MuiOutlinedInput-notchedOutline": { borderColor: "#ffffff" } },
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton aria-label="toggle password visibility" onClick={() => setShowConfirmPassword(!showConfirmPassword)} edge="end" sx={{ color: "white" }}>
                          {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
            <Button fullWidth variant="contained" sx={{ mt: 3, mb: 2, backgroundColor: "#ff9800", color: "#ffffff", "&:hover": { backgroundColor: "#ff6f00" } }} onClick={handleRegister}>
              Register
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/login" style={{ color: "#ffffff" }}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Register;
