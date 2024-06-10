import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useFavoriteContext } from "@/app/context/FavoritesCartsContext";
import { IDataCard } from "@/app/interfaces/IDataCard";
import Image from "next/image";
import styles from "./list-favorites.module.css"

function ListFavoritesCarts() {
  const [open, setOpen] = React.useState(false);
  const { favorites } = useFavoriteContext();

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <div>
      <Button onClick={toggleDrawer(true)}><FavoriteIcon /></Button>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 350 }} role="presentation" onClick={toggleDrawer(false)}>
          <p className={styles.titleFavs}>
            Favoritos
          </p> 
          <List>
            {favorites.length > 0 ? favorites.map(({id, imageCard, titleCard}: IDataCard) => (
              <ListItem key={id}>
                <ListItemButton sx={{gap: "15px"}}>
                {imageCard && <Image src={imageCard} width={80} height={50} alt={titleCard} />}
                  <ListItemText primary={titleCard} />
                </ListItemButton>
              </ListItem>
            )): (
              <p className={styles.textFavs}>No hay favoritos</p>
            )}
          </List>
        </Box>
      </Drawer>
    </div>
  );
}

export default ListFavoritesCarts