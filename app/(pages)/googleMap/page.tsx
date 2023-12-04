// React-google-maps need to installed
import { Box } from '@mui/material'
import { GoogleMap, Marker } from 'react-google-maps'

const Map = () => {
    return (
        <Box>
            <p className='text-5xl text-center text-orange-500 underline'>Map Integration</p>
            {/* <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
                <Marker position={{ lat: -34.397, lng: 150.644 }} />
            </GoogleMap> */}
        </Box>
    )
}

export default Map
