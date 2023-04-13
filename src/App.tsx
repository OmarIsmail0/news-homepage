import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import img1 from "./assets/images/image-web-3-desktop.jpg";
import pcs from "./assets/images/image-retro-pcs.jpg";
import laptop from "./assets/images/image-top-laptops.jpg";
import growth from "./assets/images/image-gaming-growth.jpg";

import { useEffect, useState } from "react";

import "./style.css";
import Navbar from "./Navbar";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);
  });

  const navStyles = {
    textDecoration: "none",
    color: "hsl(233, 8%, 79%)",
    typography: "h6",
    "&:hover": {
      color: "hsl(35, 77%, 62%)",
      cursor: "pointer",
    },
    "&.active": {
      color: "text.secondary",
    },
  };
  const links = ["Home", "New", "Popular", "Trending", "Categories"];
  const lists = [
    {
      title: "Hydrogen VS Electric Cars",
      desc: "Will hydrogen-fueled cars ever catch up to EVs?",
    },
    {
      title: "The Downsides of AI Artistry",
      desc: "What are the possible adverse effects of on-demand AI image generation?",
    },
    {
      title: "Is VC Funding Drying Up?",
      desc: "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
    },
  ];
  const ranks = [
    {
      image: pcs,
      number: "01",
      title: "Reviving Retro PCs",
      desc: "What happens when old PCs are given modern upgrades?",
    },
    {
      image: laptop,
      number: "02",
      title: "Top 10 Laptops of 2022",
      desc: "Our best picks for various needs and budgets.",
    },
    {
      image: growth,
      number: "03",
      title: "The Growth of Gaming",
      desc: "How the pandemic has sparked fresh opportunities.",
    },
  ];
  return (
    <Container>
      {windowWidth > 700 ? (
        <Toolbar
          sx={{
            mb: 4,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#000",
            ml: -3,
          }}
        >
          <Box display="flex" alignItems="center" sx={{ ml: -3 }}>
            <Typography variant="h1">W.</Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <List sx={{ display: "flex" }}>
              {links.map((link, key) => (
                <ListItem key={key} sx={navStyles}>
                  {link}
                </ListItem>
              ))}
            </List>
          </Box>
        </Toolbar>
      ) : (
        <>
          <Toolbar
            sx={{
              mb: 4,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              color: "#000",
            }}
          >
            <Box display="flex" alignItems="center" sx={{ ml: -3 }}>
              <Typography variant="h1">W.</Typography>
            </Box>

            <Navbar />
          </Toolbar>
        </>
      )}

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ mb: 10 }}>
        <Grid container rowSpacing={2} xs={12} md={8}>
          <Grid item xs={12}>
            <img src={img1} alt="img" width="100%" />
          </Grid>
          <Grid item xs={12} md={5}>
            <Typography color={"hsl(240, 100%, 5%)"} variant="h2">
              The Bright Future of Web 3.0?
            </Typography>
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography
              variant="h5"
              color={"hsl(236, 13%, 42%)"}
              sx={{ textAlign: "justify", textJustify: "inter-word" }}
            >
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </Typography>
            <Button
              sx={{
                mt: "10px",
                mb: "10px",
                width: "50%",
                fontSize: "20px",
                borderRadius: "0",
                background: "hsl(5, 85%, 63%)",
                color: "#fff",
                "&:hover": {
                  bgcolor: "hsl(240, 100%, 5%)",
                  cursor: "pointer",
                },
              }}
            >
              Read more
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "hsl(240, 100%, 5%)" }}
          >
            <ListItemText
              sx={{ m: 3, ml: 2 }}
              primary={
                <Typography variant="h2" color="hsl(35, 77%, 62%)">
                  New
                </Typography>
              }
            />
            {lists.map((list, key) => (
              <>
                <ListItemText
                  key={key}
                  sx={{ m: 3, ml: 2 }}
                  primary={
                    <Typography
                      variant="h5"
                      color="hsl(36, 100%, 99%)"
                      sx={{
                        "&:hover": {
                          color: "hsl(35, 77%, 62%) ",
                          cursor: "pointer",
                        },
                      }}
                    >
                      {list.title}
                    </Typography>
                  }
                  secondary={
                    <Typography variant="h6" color=" hsl(233, 8%, 79%)">
                      {list.desc}
                    </Typography>
                  }
                />
                {key !== 2 && <Divider variant="middle" color="#fff" />}
              </>
            ))}
          </List>
        </Grid>
      </Grid>

      <Grid
        container
        rowSpacing={{ xs: 3 }}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {ranks.map((rank, key) => (
          <Grid item container md={4} spacing={2} key={key}>
            <Grid item xs={3} md={4}>
              <img
                src={rank.image}
                alt={rank.title}
                width="100%"
                height="100%"
              />
            </Grid>
            <Grid item xs={9} md={8}>
              <Typography variant="h4" color={"hsl(233, 8%, 79%)"}>
                {rank.number}
              </Typography>
              <Typography
                color={"hsl(240, 100%, 5%)"}
                sx={{
                  fontSize: 20,
                  mt: 2,
                  "&:hover": {
                    color: "hsl(5, 85%, 63%) ",
                    cursor: "pointer",
                  },
                }}
              >
                {rank.title}
              </Typography>
              <Typography
                color={"hsl(236, 13%, 42%)"}
                sx={{
                  fontSize: 15,
                  mt: 2,
                }}
              >
                {rank.desc}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default App;
