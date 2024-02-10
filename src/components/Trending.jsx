import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import topdata from "../topRelated.json";
import bestdata from "../best.json";
import salesdata from "../sales.json";
import { useState } from "react";
import Card from "./Card";

const Trending = () => {
    const [data,setData]=useState(bestdata);
    const [selectedButton, setSelectedButton] = useState(null);

    const handleClick = (buttonId) => {
      setSelectedButton(buttonId);
    };

    const handleData=(num)=>{
     if(num===1){setData(bestdata)}
     if(num===2){setData(topdata)}
     if(num===3){setData(salesdata)}
     
    }

    return ( <>
    <Grid container justifyContent="center" alignItems="center" marginBottom="40px">
        <Grid item>
          <Box sx={{ width: "100%",mt:5 }} textAlign="center">
            <Typography variant="h4" gutterBottom >
            Trending Products
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
    <Grid container justifyContent="center" alignItems="center" marginBottom="40px">
        <Grid item>
    <Box component="div" sx={{margin:"10px auto"}}>
        
  <Button onClick={()=>{
    handleData(1),
    handleClick(1)
    }}
    sx={{color:"black",border:"1px dashed black",marginRight:"10px",borderRadius:"20px"}}
    variant={selectedButton===1?'contained':'outlined'}
    >Best Sellers</Button>
  <Button onClick={()=>{
    handleData(2),
    handleClick(2)
    }} sx={{color:"black",border:"1px dashed black",marginRight:"10px",borderRadius:"20px"}}
    variant={selectedButton===2?'contained':'outlined'}
    >Top related</Button>
  <Button onClick={()=>{
    handleData(3),
    handleClick(3)
    }} sx={{color:"black",border:"1px dashed black",marginRight:"10px",borderRadius:"20px"}}
    variant={selectedButton===3?'contained':'outlined'}>Sales</Button>

    </Box>
    </Grid>
    </Grid>
    <Grid container justifyContent="center">
        {data.map(item=>{
            return(
                <Grid item xs={8} md={5} lg={3} key={item.id}>
        <Card src={item.src} title={item.title} price={item.price} />
        </Grid>
            );
        })}
        
      </Grid>

    </> );
}
 
export default Trending;