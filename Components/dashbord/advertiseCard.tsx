import { Box, Stack } from "@mui/material";
import Image from "next/image";

//..............................................................................................COMPONENT

const AdvertiseCard = () => {
   return (
      <Stack
         width={"100%"}
         alignItems={"center"}
         rowGap={2}
         mt={3}
         justifyContent={"space-between"}
         alignContent={"center"}
         sx={{ flexDirection: { xs: "column", md: "row" } }}
      >
         <Image src="/Images/man.svg" width={848} height={328} alt="man" />
         <Image src="/Images/newKyc.svg" width={335} height={328} alt="man" />
      </Stack>
   );
};

export default AdvertiseCard;
