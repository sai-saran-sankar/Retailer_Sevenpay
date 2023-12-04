"use client";

import { Box, Tab, Tabs, Typography } from "@mui/material";
import EachServiceCard from "./eachServiceCard";
import { useState } from "react";

const aadharServices = [
   { title: "Withdraw Cash", icon: "/Images/loan.svg" },
   { title: "Check Account Balance", icon: "/Images/banker.svg" },
   { title: " Check Mini Statement", icon: "/Images/mini.svg" },
   { title: "Aadhar Pay", icon: "/Images/fingerPrint.svg" },
];
const bankingServices = [
   { title: "Money Transfer", icon: "/Images/moneyTransfer.svg" },
   { title: "Loan EMI Payment", icon: "/Images/emi.svg" },
   { title: "Housing Society", icon: "/Images/houseTax.svg" },
];
const rechargeAndBillPayments = [
   { title: "Mobile Recharge", icon: "/Images/recharde.svg" },
   { title: "Dish Recharge", icon: "/Images/dth.svg" },
   { title: "Gas Bill", icon: "/Images/gas.svg" },
   { title: "Electricity Bill", icon: "/Images/electricity.svg" },
   { title: "Fast Tag", icon: "/Images/fastag.svg" },
   { title: "Broadband", icon: "/Images/broadband.svg" },
   { title: "Municipal Tax", icon: "/Images/mtax.svg" },
   { title: "Credit Card", icon: "/Images/credit.svg" },
];

const insurances = [
   { title: "Health Insurance", icon: "/Images/life.svg" },
   { title: "Education", icon: "/Images/education.svg" },
   { title: "Life Insurance", icon: "/Images/insurance.svg" },
];

const tabHeaders = [
   { title: "All Services", value: 1 },
   { title: "Aadhar Services", value: 2 },
   { title: "Banking Services", value: 3 },
   { title: "Recharge/Billpayment", value: 4 },
   { title: "Insurance", value: 5 },
];

//..............................................................................................COMPONENT

const ServicesCard = () => {
   const [services, setSelectedServices] = useState<string | number>(1);

   const allServices =
      services == 2
         ? aadharServices
         : services == 3
         ? bankingServices
         : services == 4
         ? rechargeAndBillPayments
         : services == 5
         ? insurances
         : [
              ...aadharServices,
              ...bankingServices,
              ...rechargeAndBillPayments,
              ...insurances,
           ];

   const handleChange = (e: any, value: string | number) => {
      setSelectedServices(value);
   };

   return (
      <>
         <Box
            sx={{
               width: "100%",
               borderRadius: 5,
               bgcolor: "white",
               boxShadow: 1,
               display: "flex",
               flexDirection: "column",
               p: 2,
            }}
            mt={3}
         >
            <Tabs
               value={services}
               textColor="secondary"
               indicatorColor="secondary"
               onChange={handleChange}
               sx={{
                  borderBottom: "solid 0.5px silver",
                  "&.MuiTabList-indicator": { width: 0.2 },
                  display: { xs: "none", md: "flex" },
               }}
            >
               {tabHeaders.map((e) => (
                  <Tab
                     key={e.value}
                     value={e.value}
                     label={e.title}
                     sx={{
                        fontWeight: "bold",
                        textTransform: "inherit",
                        fontSize: 16,
                     }}
                  />
               ))}
            </Tabs>
            <Typography
               variant="h6"
               fontWeight={600}
               ml={2.5}
               color="#263268"
               sx={{
                  display: {
                     xs: "flex",
                     md: "none",
                     textDecoration: "underline",
                  },
               }}
            >
               Services
            </Typography>
            <Box
               display={"flex"}
               flexWrap={"wrap"}
               width={"100%"}
               justifyContent={"flex-start"}
               gap={2.5}
               pt={3}
               pl={2}
               pb={2}
               sx={{ pt: { xs: 1, md: 3 }, gap: { xs: 4.5, md: 2.5 } }}
            >
               {allServices.map((e) => (
                  <EachServiceCard key={e.title} details={e} />
               ))}
            </Box>
         </Box>
      </>
   );
};

export default ServicesCard;
