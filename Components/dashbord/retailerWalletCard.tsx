import {
  Stack,
  Box,
  Typography,
  TextField,
  InputAdornment,
} from "@mui/material";
import AddToHomeScreenIcon from "@mui/icons-material/AddToHomeScreen";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import Image from "next/image";

const transactinosItems = [
  {
    title: "Total Income",
    amount: "5000",
    color: "#F2F3FF",
    icon: "/Images/money.png",
  },
  {
    title: "Transaction Value",
    amount: "15000",
    color: "#F7EFFF",
    icon: "/Images/stock.png",
  },
  {
    title: "Wallet Balance",
    amount: "45000",
    color: "#FFF3F8",
    icon: "/Images/wallet.png",
  },
  {
    title: "Cash wallet",
    amount: "2000",
    color: "#FFECEC",
    icon: "/Images/bank.png",
  },
];

//..............................................................................................COMPONENT

const RetailerWalletCard = () => (
  <Stack direction={"row"} gap={2}>
    <Box
      sx={{
        width: 801,
        height: { xs: "auto", md: 211 },
        borderRadius: 5,
        bgcolor: "white",
        boxShadow: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      p={2}
    >
      <Typography
        variant="body1"
        color="initial"
        ml={2}
        mb={1}
        alignSelf={"start"}
      >
        Thursday ,14 September, 2023
      </Typography>
      <Stack
        direction={"row"}
        gap={2}
        sx={{
          flexWrap: "wrap",
          justifyContent: { xs: "space-evenly", md: "none" },
        }}
      >
        {transactinosItems.map((e) => (
          <Box
            key={e.title}
            height={131}
            bgcolor={e.color}
            borderRadius={5}
            p={2}
            sx={{ width: { xs: 130, sm: 172 } }}
          >
            <div
              style={{
                width: 37,
                height: 40,
                objectFit: "cover",
                marginBottom: 5,
              }}
            >
              <Image src={e.icon} alt={"image"} width={37} height={40} />
            </div>
            <Typography
              variant="body2"
              color="initial"
              fontWeight={600}
              sx={{ fontSize: { xs: 11, md: 14 } }}
            >
              {e.title}
            </Typography>
            <Typography
              variant="body1"
              color="initial"
              fontWeight={600}
              sx={{ fontSize: { xs: 13, sm: 24 } }}
            >
              <CurrencyRupeeIcon
                fontSize="small"
                sx={{ fontSize: { xs: 12, md: 17 } }}
              />
              {e.amount}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Box>

    <Stack
      sx={{
        width: 387,
        boxShadow: 1,
        borderRadius: 5,
        backgroundColor: "white",
        display: { xs: "none", md: "flex" },
      }}
      spacing={2}
      justifyContent={"center"}
      p={2}
    >
      <Typography fontWeight={"bold"} fontSize={18} color="#313131">
        Get Customer Data
      </Typography>
      <TextField
        label="Enter Customer Number"
        sx={{ width: 347 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AddToHomeScreenIcon />
            </InputAdornment>
          ),
        }}
      />

      <button
        style={{
          color: "white",
          width: 347,
          height: 48,
          backgroundColor: "#FF6600",
          borderRadius: 7,
        }}
      >
        Get Details
      </button>
    </Stack>
  </Stack>
);

export default RetailerWalletCard;
