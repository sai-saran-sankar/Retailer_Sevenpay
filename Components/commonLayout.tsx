"use client";

import { Avatar, Box, Drawer, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CallIcon from "@mui/icons-material/Call";
import Sidebar from "./dashbord/sidebar";

const wallets = [
   { title: "Main Wallet", image: "/Images/wallter.png", amount: 75469 },
   { title: "Cash Wallet", image: "/Images/cash.png", amount: 45895 },
];

const CommonLayout = ({ children }: any) => {
   const [showDrawer, setShowDrawer] = useState(false);

   return (
      <Box
         width={"100%"}
         height={"100vh"}
         overflow={"auto"}
         sx={{ backgroundImage: "linear-gradient(#FBD78F,white)" }}
         position={"relative"}
      >
         <Drawer
            anchor={"right"}
            open={showDrawer}
            onClose={() => setShowDrawer(false)}
         >
            <Sidebar />
         </Drawer>
         <header style={{ width: "100%" }}>
            <Stack
               width={"100%"}
               height={56}
               p={1}
               justifyContent={"space-between"}
               direction={"row"}
               bgcolor={"white"}
            >
               <Image
                  src={"/Images/logo.svg"}
                  width={150}
                  height={36}
                  alt={"sevenpayLogo"}
                  style={{ marginLeft: 15 }}
               />
               <Stack direction={"row"} gap={4} mr={3} alignItems={"center"}>
                  <Box sx={{ display: { xs: "none", md: "flex" } }}>
                     <CallIcon sx={{ color: "#FF6600" }} fontSize="large" />
                     <div>
                        <Typography
                           variant="body1"
                           color="initial"
                           fontSize={12}
                           fontWeight={550}
                        >
                           Toll Free
                        </Typography>
                        <Typography
                           variant="body1"
                           color="#FF6600"
                           fontSize={13}
                           fontWeight={"bold"}
                        >
                           1800 456 456
                        </Typography>
                     </div>
                  </Box>
                  <NotificationsIcon sx={{ fontSize: 30 }} />
                  <div onClick={(e) => setShowDrawer(true)}>
                     {" "}
                     <Avatar
                        sx={{
                           bgcolor: "#FF6600",
                           width: 30,
                           height: 30,
                           ":hover": {
                              cursor: "pointer",
                              boxShadow: 8,
                              bgcolor: "purple",
                           },
                        }}
                     >
                        S
                     </Avatar>
                  </div>
               </Stack>
            </Stack>

            <Stack
               height={161}
               width={"100%"}
               sx={{
                  backgroundImage: 'url("/Images/bgImage3.png")',
                  backgroundSize: "cover",
                  pl: { xs: 2, md: 10 },
                  pr: { xs: 2, md: 10 },
               }}
               pt={3.5}
            >
               <Stack direction={"row"} justifyContent={"space-between"}>
                  <Box
                     sx={{
                        display: { xs: "none", md: "flex" },
                        flexDirection: "column",
                     }}
                  >
                     <Typography color="white" fontWeight={700} fontSize={21}>
                        Hi, Retailer 👋
                     </Typography>
                     <Typography color="white" fontWeight={400} fontSize={14}>
                        RT 1001
                     </Typography>
                  </Box>

                  <Stack
                     height={54}
                     direction={"row"}
                     justifyContent={"space-between"}
                     sx={{ width: { xs: "100%", md: 354 } }}
                  >
                     {wallets.map((e) => (
                        <Box
                           key={e.title}
                           sx={{
                              borderRadius: 2,
                              backgroundColor: "rgba(255, 255, 255, 0.25)",
                              width: { xs: 145, sm: 169 },
                              height: 54,
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              gap: 1,
                              p: 1,
                           }}
                        >
                           <Image
                              src={e.image}
                              width={30}
                              height={30}
                              alt="cashWallet"
                              color="white"
                           />
                           <Stack color={"white"} ml={1}>
                              <Typography fontSize={12}>{e.title}</Typography>
                              <Typography fontSize={16}>
                                 <CurrencyRupeeIcon sx={{ fontSize: 15 }} />
                                 {e.amount}
                              </Typography>
                           </Stack>
                        </Box>
                     ))}
                  </Stack>
               </Stack>
            </Stack>
         </header>

         <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-between"}
            width={"100%"}
            position={"absolute"}
            top={170}
            alignItems={"center"}
         >
            <Box sx={{ width: { xs: "100%", md: 1201 } }}>{children}</Box>
         </Box>
      </Box>
   );
};
export default CommonLayout;
