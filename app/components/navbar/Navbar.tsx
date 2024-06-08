import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import Image from "next/image";
import styles from "./navbar.module.css";
// import ListMenu from "./components/ListMenu";

const pages: string[] = ["Modelos", "Ficha de modelo"];

function Navbar() {
  return (
    <AppBar position="absolute" color="transparent" className={styles.navbar}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "black",
              textDecoration: "none",
            }}
          >
            <Image
              src="https://www.auta.com.ar/static/media/logo-auta.1ad353ae5985c99b7417.png"
              alt="logo-auta"
              width={100}
              height={50}
            />
          </Typography>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "black",
              textDecoration: "none",
            }}
          >
            <Image
              src="https://www.auta.com.ar/static/media/logo-auta.1ad353ae5985c99b7417.png"
              alt="logo-auta"
              width={100}
              height={50}
            />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: "white", display: "block" }}
                className="text-black hover:text-red-500 hover:bg-inherit"
              >
                <p>{page}</p>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="">
              <div className="flex align-items-center">
                <p className="text-black mt-2">Menú</p>
                {/* <ListMenu /> */}
              </div>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
