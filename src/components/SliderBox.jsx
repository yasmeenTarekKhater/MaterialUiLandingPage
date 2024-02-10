import Grid  from "@mui/material/Grid";
import  Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init({duration:1000});
const SliderBox = (props) => {
    return (
        <Box component='div' sx={{marginTop:"16px",backgroundImage:`url(${props.s})`}}>
    <Grid container justifyContent="center" alignItems="center" spacing={2} py={3}  sx={{height:"100vh"}}>
      <Grid item xs={8} md={10} lg={5} mb={3} data-aos="fade-right">
         <Typography variant="h4" fontWeight="bold">
         Keep up to Date with Our
New Collection and Exclusive Offers
         </Typography>
         <IconButton
    
    aria-label="Add to Favorites"
    sx={{
      backgroundColor:"black",
      borderRadius:"20px",
      padding:"10px 20px",
     
      marginTop:"15px",
      fontSize:"17px",
      color:"white",
      
      "&:hover":{
        backgroundColor:"grey"
      }
      }}
  >
    
      Shop now
      <ArrowForwardIcon sx={{marginLeft:'10px'}} />
  </IconButton>
      </Grid>
      <Grid item xs={8} md={10} lg={5} mb={3}>
      
      </Grid>
    </Grid>
       </Box>
      );
}
 
export default SliderBox;