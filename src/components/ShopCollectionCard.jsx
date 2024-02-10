import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import  Avatar  from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init({duration:1000});
const ShopCollectionCard = ({title,number,src}) => {
    return ( <>
    
    <Box textAlign="center" component="div" data-aos="fade-up" >
        <Avatar alt="Image Alt Text" src={src}
            sx={{
              margin:"auto",
              marginBottom:'30px',
              width:"140px",
              height:"140px",
            }}
            />
            <Badge badgeContent={number} color="secondary" >
            <Typography variant="h5" gutterBottom color="grey">
            {title}
            </Typography>
    </Badge>
        </Box>
    
    </> );
}
 
export default ShopCollectionCard;