import React from "react";
import { Stack, Box, Button, Typography,CardMedia } from "@mui/material/";
const Advt = () => {
  return (
    <Box>
      <Box sx={{
            border: '1px solid black',
            width: '100%',
            height: 'auto',
            display: 'flex',
            flexDirection: {xs: 'column', sm: 'column', md: 'row', lg: 'row', xl: 'row'},
            justifyContent: 'space-between',
            px: {xs: '2rem', sm: "2rem", md: "5rem", lg: "13rem" },
            flex: '1',
            background: "#2a2b30",
            color: 'white',
            alignItems: 'center',
            py: '5rem'
        }}
      >
        <Box sx={{width: {xs: '100%', sm : '100%', md: '50%'}
        , height: 'auto',
        display: 'flex',
        gap: '2rem',
        flexDirection: 'column'
    }}>
        <Typography variant='h3' gutterBottom>
        Track and Manage Your Assets with One Platform
        </Typography>
        <Typography variant="body1" gutterBottom>
        Inventory is your all-encompassing solution for streamlined asset tracking and management. From robust software capabilities to seamless integration with mobile scanners and printers, we provide the tools you need to optimize every aspect of your asset management process.
      </Typography>
        </Box>

        <Box sx={{width: {xs: '100%', sm : '100%', md: '50%'}
    }}>
        <CardMedia sx={{width: '100%'}}
        component="img"
        objectFit='cover'
        height='auto'
        image={`https://res.cloudinary.com/dmfduiboy/image/fetch/f_auto/fl_immutable_cache%2Cfl_preserve_transparency%2Ccs_tinysrgb%2Cq_auto%2Cw_538/https://8228999.fs1.hubspotusercontent-na1.net/hub/8228999/hubfs/redbeam-collage-features_950%20(1).webp%3Fwidth=1076&name=redbeam-collage-features_950%20(1).webp`}
        alt="Paella dish"
      />
        </Box>
      </Box>
    </Box>
  );
};

export default Advt;
