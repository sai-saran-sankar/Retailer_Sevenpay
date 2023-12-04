import {
   Box,
   Avatar,
   Stack,
   Divider,
   List,
   ListItem,
   ListItemButton,
   ListItemIcon,
   ListItemText,
   Button,
} from "@mui/material";
import SummarizeIcon from "@mui/icons-material/Summarize";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import GroupIcon from "@mui/icons-material/Group";
import DevicesIcon from "@mui/icons-material/Devices";

const profile = [
   {
      title: "Reports",
      icon: <SummarizeIcon sx={{ color: "white" }} />,
      description: "Export and view all transactions",
   },
   {
      title: "Support",
      icon: <ContactSupportIcon sx={{ color: "white" }} />,
      description: "Export and view all transactions",
   },
   {
      title: "Csp Onboarding",
      icon: <AccountBalanceIcon sx={{ color: "white" }} />,
      description: "Export and view all transactions",
   },
   {
      title: "Manage Users",
      icon: <GroupIcon sx={{ color: "white" }} />,
      description: "Export and view all transactions",
   },
   {
      title: "Purchase Device",
      icon: <DevicesIcon sx={{ color: "white" }} />,
      description: "Export and view all transactions",
   },
];

//..............................................................................................COMPONENT

const Sidebar = () => (
   <Box
      p={1}
      color={"white"}
      sx={{ width: 285, height: "100vh", background: "rgb(40, 36, 61)" }}
      role="presentation"
   >
      <Box display={"flex"} p={3}>
         <Avatar sx={{ bgcolor: "#FF6600", width: 45, height: 45 }}>S</Avatar>
         <Stack ml={2}>
            <p>Hi, Sai </p>
            <p>RT1223361 </p>
         </Stack>
      </Box>
      <Divider variant="middle" sx={{ border: "solid 1px gray" }} />
      <List>
         {profile.map((text, index) => (
            <ListItem
               key={index}
               sx={{
                  ":hover": {
                     backgroundColor: "rgba(147, 143, 140,0.2)",
                     borderRadius: 2,
                  },
               }}
            >
               <ListItemButton color="white">
                  <ListItemIcon>{text.icon}</ListItemIcon>
                  <ListItemText primary={text.title} />
               </ListItemButton>
            </ListItem>
         ))}
      </List>
      <Button fullWidth variant="contained" sx={{ color: "white", mt: 8 }}>
         Logout
      </Button>
   </Box>
);

export default Sidebar;
