import Grid  from "@mui/material/Grid";
import  Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { FormControl, IconButton, Input, InputAdornment, InputLabel } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const Subscribe = () => {
    return ( <>
    <Box component='div' sx={{marginTop:"40px"}}>
      <Grid container justifyContent="center" alignItems="center" spacing={2} py={3} lg={10} sx={{margin:'auto',backgroundColor:"lightblue"}}>
        <Grid item xs={8} md={10} lg={5} mb={3}>
           <Typography variant="h4" fontWeight="bold">
           Keep up to Date with Our
New Collection and Exclusive Offers
           </Typography>
        </Grid>
        <Grid item xs={8} md={10} lg={5} mb={3}>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Subscribe</InputLabel>
          <Input
            id="standard-adornment-password"
            type= 'text'
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                >
                  <ArrowForwardIcon />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <IconButton
      
      aria-label="Add to Favorites"
      sx={{
        backgroundColor:"black",
        borderRadius:"20px",
        padding:"10px 20px",
        marginLeft:'30px',
        marginTop:"15px",
        fontSize:"20px",
        color:"white",
        
        "&:hover":{
          backgroundColor:"grey"
        }
        }}
    >
      
        Subscribe 
        <ArrowForwardIcon />
    </IconButton>
        </Grid>
      </Grid>
    </Box>
    
    </> );
}
 
export default Subscribe;