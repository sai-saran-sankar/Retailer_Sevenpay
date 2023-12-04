import { Box, Stack } from "@mui/material";
import Image from "next/image";

const TransactionsCard = () => (
   <Box width={"100%"} mt={2} mb={1}>
      <Stack
         direction={"row"}
         flexWrap={"wrap"}
         gap={2}
         sx={{
            justifyContent: {
               xs: "space-around",
               md: "flex-start",
               alignItems: "center",
            },
         }}
      >
         <Image
            src="/Images/earnings.svg"
            width={605}
            height={322}
            alt="earnings"
         />
         <Image
            src="/Images/transactionsValue.svg"
            width={578}
            height={322}
            alt="transactionValue"
         />
         <Image
            src="/Images/lastTransactions.svg"
            width={605}
            height={481}
            alt="lastTransactions"
         />
         <Image
            src="/Images/todaysEarnings.svg"
            width={575}
            height={481}
            alt="todaysEarnings"
         />
      </Stack>
   </Box>
);

export default TransactionsCard;
