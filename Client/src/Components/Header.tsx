import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, Box, Button, IconButton, List, ListItem, Stack, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router";

const links = [
  {title: "Home", to:"/"},
  {title: "Catalog", to:"/Catalog"},
  {title: "Contact", to:"/Contact"},
  {title: "About", to:"/About"},
]

const navStyles ={
  color:"inherit",
  TextDecoderation:"none",
  "&:hover":{
    color:"text.primary"
  },
  "&.active":{
    color:"warning.light"
  }
}

export default function Header(){
    return(
      <AppBar position="static" sx={{mb:4}}>
        <Toolbar sx={{display:"flex", justifyContent: "space-between"}}>
          <Box sx={{display:"flex", alignItems: "center"}}>
            <Typography variant="h6">E-Commerce</Typography>
            <Stack direction="row" spacing={1}>
              {links.map(link=> 
                <Button component={NavLink} to={link.to} sx={navStyles}>{link.title}</Button>
              )}
            </Stack>
          </Box>

          <Box>
            <IconButton size="large" edge="start" color="inherit">
              <Badge badgeContent="2" color="secondary">
                <ShoppingCart/>
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    );
  }
  