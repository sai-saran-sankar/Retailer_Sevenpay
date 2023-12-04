import AdvertiseCard from '@/Components/dashbord/advertiseCard'
import { Box } from '@mui/material'
import RewardsCard from '@/Components/dashbord/rewardsCard'
import ServicesCard from '@/Components/dashbord/servicesCard'
import RetailerWalletCard from '@/Components/dashbord/retailerWalletCard'
import TransactionsCard from '@/Components/dashbord/transactionsCard'

const Dashboard = () => (
    <Box height={1024}>
        <RetailerWalletCard />
        <ServicesCard />
        <AdvertiseCard />
        <TransactionsCard />
        <RewardsCard />
    </Box>
)

export default Dashboard
