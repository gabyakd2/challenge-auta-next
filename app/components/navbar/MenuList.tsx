"use client";
import React, { useState } from "react";
import { useSignOut } from "@/app/hook/useSignOut";
import { Menu, MenuItem, Button } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import Link from "next/link";
import styles from "./navbar.module.css";

function MenuList() {
  const { handleSignOut } = useSignOut();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    handleSignOut()
    setAnchorEl(null);
  };
  return (
    <>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <AccountCircle color="primary" fontSize="large" />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link href="/login" className={styles.itemMenu}>
            <PersonOutlineIcon />
            Iniciar Sesión
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href="/register" className={styles.itemMenu}>
            <PersonAddAltIcon />
            Registrarse
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </>
  );
}

export default MenuList;
