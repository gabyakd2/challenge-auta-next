"use client";
import React, { useState } from "react";
import { useSignOut } from "@/app/hook/useSignOut";
import { Menu, MenuItem, Button } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import Link from "next/link";
import styles from "./navbar.module.css";
import { useAuth } from "@/app/hook/useAuth";

function MenuList() {
  const { userSesion } = useAuth();
  const { handleSignOut } = useSignOut();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
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
        {!userSesion ? (
          <div>
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
          </div>
        ) : (
          <MenuItem onClick={handleClose}>
            <Link href="/" onClick={handleSignOut} className={styles.itemMenu}>
              <LogoutIcon />
              Cerrar sesión
            </Link>
          </MenuItem>
        )}
      </Menu>
    </>
  );
}

export default MenuList;
