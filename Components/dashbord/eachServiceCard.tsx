import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const EachServiceCard = (props: any) => {
   const { details } = props;
   return (
      <Box
         borderRadius={5}
         gap={1.5}
         p={3}
         display={"flex"}
         flexDirection={"column"}
         alignItems={"center"}
         sx={{
            border: { xs: "none", md: "solid #F2F2F2" },
            boxShadow: { xs: 0, md: 1 },
            width: { xs: 30, md: 145 },
            height: { xs: 80, md: 125 },
            ":hover": {
               cursor: "pointer",
               borderColor: "rgb(245, 118, 24 ,0.5)",
               boxShadow: 5,
               transform: "scale(1.1,1.1   )",
            },
         }}
      >
         <Box sx={{ width: 50, height: 40, objectFit: "cover" }}>
            <Image
               src={details?.icon}
               alt={"image"}
               width={45}
               height={35}
               objectFit="cover"
            />
         </Box>
         <Typography
            variant="body2"
            fontSize={12}
            color="initial"
            fontWeight={600}
            textAlign={"center"}
            sx={{ fontSize: { xs: 7, md: 12 } }}
         >
            {details?.title}
         </Typography>
      </Box>
   );
};

export default EachServiceCard;
