import React from "react";
import { AppBar, Box, Toolbar, Typography, Container, Button, Tooltip, GlobalStyles } from "@mui/material";
import Image from "next/image";
import styles from "./navbar.module.css";
import MenuList from "./MenuList";

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
              <GlobalStyles styles={{ body: { paddingRight: "0 !important" } }} />
                <MenuList />
              </div>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
