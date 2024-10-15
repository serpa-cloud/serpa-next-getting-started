"use client";

import styles from "./page.module.css";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";

function Header() {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "white" }}>
      <Toolbar>
        <img
          src="https://decelera.ventures/img_6670-min-2/"
          alt="DECELERA Logo"
          style={{ height: "40px", marginRight: "16px" }}
        />
        <Typography variant="h6" component="div" sx={{ color: "blue" }}>
          Doctores a domicilio
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default function Home() {
  const [showCalendly, setShowCalendly] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handleBandClick = () => {
    setShowCalendly(true);
  };

  return (
    <>
      <Header />
      <Container
        className={styles.main}
        sx={{
          marginTop: '64px',
          backgroundColor: 'rgba(255, 255, 0, 0.4)', // Amarillo
          padding: '16px',
          borderRadius: '8px',
          minHeight: '100vh',
          position: 'relative'
        }}
      >
        <div
          onClick={handleBandClick}
          style={{
            position: 'absolute',
            top: '20px',
            left: '-50px',
            width: '200%',
            height: '50px',
            backgroundColor: 'red',
            transform: 'rotate(-45deg)',
            cursor: 'pointer'
          }}
        ></div>
        <Typography variant="h4" component="h1" gutterBottom sx={{ color: 'red' }}>
          Agenda una demo con Elsa
        </Typography>
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            marginTop: '16px'
          }}
        >
          <TextField label="Nombre" variant="outlined" required />
          <TextField label="Empresa" variant="outlined" required />
          <TextField label="Cargo" variant="outlined" required />
          <TextField label="Correo de contacto" variant="outlined" type="email" required />
          <Button variant="contained" color="primary" type="submit">
            Enviar
          </Button>
        </Box>
        {showCalendly && (
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/emilia-_vy/quick-call"
            style={{ minWidth: '320px', height: '700px', marginTop: '16px' }}
          ></div>
        )}
        <Button variant="contained" color="secondary" sx={{ marginTop: '16px' }}>
          Sapo Verde
        </Button>
      </Container>
    </>
  );
}
