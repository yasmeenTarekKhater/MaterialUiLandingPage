import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import itemData from "../targetData.json";
import { Avatar } from "@mui/material";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init({duration:1000});
const Target = () => {
  return (
    <>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        marginBottom="40px"
      >
        <Grid item>
          <Box component="div" sx={{ width: "100%", mt: 5 }} textAlign="center">
            <Typography variant="h4" gutterBottom>
              Our Target
            </Typography>
            <Typography variant="p" gutterBottom color="grey">
              That is what we care about
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid
        container
        justifyContent="center"
        textAlign="center"
        spacing={2}
      >
        {itemData.map((item) => (
          // eslint-disable-next-line react/jsx-key
          <Grid item sm={7} md={2}  >
            <Box key={item.src} position="relative" margin="0 auto" data-aos="fade-down">
              <Avatar
                src={item.src}
                alt={item.title}
                variant="rounded"
                
                sx={{
                    width:"50%",
                    margin:"0 auto",
                    height:"300px",
                    transition:"1s",
                    "&:hover":{
                        width:"90%",
                    }
                }}
              />
            </Box>
            <Typography component="p" color="grey" mt="50px">
                {item.title}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Target;
