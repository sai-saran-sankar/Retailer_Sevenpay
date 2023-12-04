import { Box, Divider, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const RewardsCard = () => {
   return (
      <>
         <Stack
            direction={"row"}
            width={"100%"}
            alignItems={"center"}
            rowGap={2}
            flexWrap={"wrap"}
            sx={{ justifyContent: { xs: "space-around", md: "space-between" } }}
         >
            <Image
               src="/Images/topRewards.svg"
               width={380}
               height={480}
               alt="topRewards"
               objectFit="contain"
            />
            <Image
               src="/Images/topDistrubutors.svg"
               width={380}
               height={480}
               alt="topDisturbutors"
               objectFit="contain"
            />
            <Image
               src="/Images/topRetailers.svg"
               width={380}
               height={480}
               alt="topRetailers"
               objectFit="contain"
            />
            <Image
               src="/Images/getCommission.svg"
               width={589}
               height={182}
               alt="getCommission"
               objectFit="cover"
            />
            <Image
               src="/Images/certificate.svg"
               width={589}
               height={182}
               alt="certificate"
               objectFit="cover"
            />
            <Image
               src="/Images/market.svg"
               width={589}
               height={182}
               alt="market"
               objectFit="cover"
            />
            <Image
               src="/Images/updates.svg"
               width={589}
               height={182}
               alt="updates"
               objectFit="cover"
            />
            <Image
               src="/Images/openAccount.svg"
               width={1200}
               height={117}
               alt="openAccount"
            />
            <Stack
               width={1440}
               justifyContent={"flex-end"}
               bgcolor={"#090a33"}
               borderRadius={1}
               sx={{ height: { xs: 30, md: 56 } }}
            >
               <Typography
                  sx={{
                     fontSize: { xs: 8, md: 14 },
                     fontWeight: 500,
                     color: "white",
                     textAlign: "center",
                     alignSelf: "center",
                  }}
               >
                  Copyright © 2022-23 Bankify.money Limited. All rights
                  reserved.
               </Typography>
               <Box height={20} />
            </Stack>
         </Stack>
      </>
   );
};

export default RewardsCard;
