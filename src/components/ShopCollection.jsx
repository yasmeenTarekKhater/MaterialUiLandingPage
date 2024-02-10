import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ShopCollectionCard from "./ShopCollectionCard";
import data from '../shopCollectionData.json';

const ShopCollection = () => {
    return ( 
        <>
        <Grid container justifyContent="center" alignItems="center" marginBottom="40px">
        <Grid item>
          <Box sx={{ width: "100%",mt:5 }} textAlign="center">
            <Typography variant="h4" gutterBottom >
            Shop The Collections
            </Typography>
            <Typography variant="p" gutterBottom color="grey">
            Shop the latest products from the most popular collections
            </Typography>
          </Box>
        </Grid>
        </Grid>
        <Grid container padding="30px" justifyContent="center" spacing={3} alignItems="center" marginBottom="40px">
           {data.map(p=>{
            return(
                <Grid item sm={7} md={4} lg={2} key={p.id}>
            <ShopCollectionCard title={p.title} number={p.number} src={p.src}/>
            </Grid>
            );
           })}
            
            
        </Grid>
        </>
     );
}
 
export default ShopCollection;