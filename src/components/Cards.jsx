import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Card from "./Card";
import IconButton from '@mui/material/IconButton';
import CircularProgress from '@mui/material/CircularProgress';

import { useState } from "react";

const Cards = () => {
  const [isLoading3, setIsLoading3] = useState(false);
  const handleButtonClick3 = () => {
   
    setIsLoading3(true);
    setTimeout(() => {
     
      setIsLoading3(false);
    }, 2000);
  };
  return (
    <>
      <Grid container justifyContent="center" alignItems="center" marginBottom="40px">
        <Grid item>
          <Box sx={{ width: "100%",mt:5 }}>
            <Typography variant="h4" gutterBottom >
              New Arrival Products
            </Typography>
            <Divider
              component="hr"
              color="black"
              sx={{
                borderBottomWidth: "4px",
                width:'140px',
                margin:"auto"
              }}
            />
          </Box>
        </Grid>
      </Grid>
      <Grid container justifyContent="center">
        <Grid item xs={8} md={5} lg={3}>
        <Card src={'./product.jpg'} title={"product"} price={"30$"}/>
        </Grid>
        <Grid item xs={8} md={5} lg={3}>
        <Card src={'./product.jpg'} title={"product"} price={"30$"}/>
        </Grid>
        <Grid item xs={8} md={5} lg={3}>
        <Card src={'./product.jpg'} title={"product"} price={"30$"}/>
        </Grid>
        <Grid item xs={8} md={5} lg={3}>
        <Card src={'./product.jpg'} title={"product"} price={"30$"}/>
        </Grid>
      </Grid>
      <Grid container justifyContent="center">
        <Grid item xs={8} md={5} lg={3}>
        <Card src={'./product.jpg'} title={"product"} price={"30$"}/>
        </Grid>
        <Grid item xs={8} md={5} lg={3}>
        <Card src={'./product.jpg'} title={"product"} price={"30$"}/>
        </Grid>
        <Grid item xs={8} md={5} lg={3}>
        <Card src={'./product.jpg'} title={"product"} price={"30$"}/>
        </Grid>
        <Grid item xs={8} md={5} lg={3}>
        <Card src={'./product.jpg'} title={"product"} price={"30$"}/>
        </Grid>
      </Grid>
      <Box textAlign="center" mt={5} mb={5}>
        <IconButton
      
        aria-label="Add to Favorites"
        onClick={handleButtonClick3}
        disabled={isLoading3}
        sx={{
          backgroundColor:"black",
          borderRadius:"10px",
          padding:"10px",
          color:"white",
          
          "&:hover":{
            backgroundColor:"grey"
          }
          }}
      >
        {isLoading3 ? (
          <CircularProgress size={24} />
        ) : (
          "Show More ....."
        )}
      </IconButton>
      </Box>
      
    </>
  );
};

export default Cards;
