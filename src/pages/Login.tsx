import React, { useState } from "react";
import { Avatar, Box, Button, Container, CssBaseline, Grid, TextField, Typography, InputAdornment, IconButton } from "@mui/material";
import { LockOutlined, Visibility, VisibilityOff } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebaseConfig";
import HomeIcon from '@mui/icons-material/Home'; // Home icon
import GoogleIcon from '@mui/icons-material/Google'; // Google icon

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessages, setErrorMessages] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = async () => {
    setErrorMessages({ email: "", password: "" });
    let valid = true;

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setErrorMessages((prev) => ({ ...prev, email: "Valid email is required" }));
      valid = false;
    }
    if (!password) {
      setErrorMessages((prev) => ({ ...prev, password: "Password is required" }));
      valid = false;
    }

    if (valid) {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        console.log("Login successful");
        navigate("/home");
      } catch (error) {
        console.error("Error logging in:", error.message);
        setErrorMessages((prev) => ({ ...prev, email: "Error logging in. Please try again." }));
      }
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Google login successful", user);
      navigate("/home");
    } catch (error) {
      console.error("Error logging in with Google:", error.message);
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
            Login
          </Typography>
          <Box sx={{ mt: 1, width: "100%" }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
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
              <Grid item xs={12}>
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
            </Grid>
            <Button fullWidth variant="contained" sx={{ mt: 3, mb: 2, backgroundColor: "#ff9800", color: "#ffffff", "&:hover": { backgroundColor: "#ff6f00" } }} onClick={handleLogin}>
              Login
            </Button>
            <Button fullWidth variant="outlined" sx={{ mt: 2, mb: 2, borderColor: "#ffffff", color: "#ffffff" }} onClick={handleGoogleLogin}>
              <GoogleIcon sx={{ mr: 1 }} /> Sign in with Google
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/register" style={{ color: "#ffffff" }}>
                  Don't have an account? Register
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Login;
