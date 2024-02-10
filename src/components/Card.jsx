import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import  Avatar  from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import CircularProgress from '@mui/material/CircularProgress';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init({duration:1000});
const styles = {
  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    margin: '0 10px',
  },
};

const Card = ({src,title,price}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  const [isLoading3, setIsLoading3] = useState(false);
  const [changeImage, setChangeImage] = useState(src);
  
  useEffect(()=>{
    setChangeImage(src)
  },[src])

  useEffect(()=>{
    setChangeImage(changeImage)
  },[changeImage])

  const handleImg=()=>{
      setChangeImage("./p2.jpg")
  }
  const handleImg2=()=>{
      setChangeImage(src);
  }
  const handleButtonClick = () => {
    setIsLoading(true);
   
    setTimeout(() => {
      setIsLoading(false);
     
    }, 200);
  };
  const handleButtonClick2 = () => {
   
    setIsLoading2(true);
    setTimeout(() => {
     
      setIsLoading2(false);
    }, 2000);
  };
  const handleButtonClick3 = () => {
   
    setIsLoading3(true);
    setTimeout(() => {
     
      setIsLoading3(false);
    }, 2000);
  };
    return ( 
        <>
        <Box data-aos="fade-down" sx={{width:'260px',border:"1px solid gray",overflow:"hidden"}} component="div" margin="10px auto" >
          <Box component="div" sx={{height:"300px",overflow:"hidden",position:"relative"}} onMouseEnter={handleImg} onMouseLeave={handleImg2}>
            <Avatar alt="Image Alt Text" src={changeImage} variant="rounded" 
            sx={{
              width:"100%",
              margin:"auto",
              height:"300px",
              marginBottom:'30px',
              transition:"1s",
              position:"absolute",
             
              "&:hover":{
                transform:"scale(1.1)",
              }
            }}
            />
            <Box component="div" zIndex="2" position="absolute" bottom="0px" left="40px"
            sx={{
              opacity:0,
              width:"100%",
              "&:hover":{
                opacity:1
              }
            }}
            >
      <IconButton
        aria-label="Add to Cart"
        style={styles.button}
        onClick={handleButtonClick}
        disabled={isLoading}
        sx={{
          backgroundColor:"white",
          "&:hover":{
            backgroundColor:"black",color:"white"
          }
          }}
      >
        {isLoading ? (
          <CircularProgress size={24} />
        ) : (
          <ShoppingCartOutlinedIcon />
        )}
      </IconButton>
      <IconButton
        aria-label="Add to Favorites"
        style={styles.button}
        onClick={handleButtonClick2}
        disabled={isLoading2}
        sx={{
          backgroundColor:"white",
          "&:hover":{
            backgroundColor:"black",color:"white"
          }
          }}
      >
        {isLoading2 ? (
          <CircularProgress size={24} />
        ) : (
          <FavoriteBorderOutlinedIcon />
        )}
      </IconButton>
      <IconButton
        aria-label="Add to Favorites"
        style={styles.button}
        onClick={handleButtonClick3}
        disabled={isLoading3}
        sx={{
          backgroundColor:"white",
          "&:hover":{
            backgroundColor:"black",color:"white"
          }
          }}
      >
        {isLoading3 ? (
          <CircularProgress size={24} />
        ) : (
          <RemoveRedEyeOutlinedIcon />
        )}
      </IconButton>
            </Box>
          </Box>
          <Box component="div" textAlign="center" sx={{marginTop:"30px"}}>
          <Typography  component="h5" gutterBottom fontWeight="bold">
              {title}
          </Typography>
          <Typography  component="p" gutterBottom color="grey" >
              {price}
          </Typography>
          </Box>
        </Box>
        
        </>
     );
}
export default Card;
