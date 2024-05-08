import GoogleMapReact from 'google-map-react'
import { Box, Center, Text, Icon } from '@chakra-ui/react'
import { googleMapsKey } from '../../lib/auth/extApiAuth'
import { IoPinSharp } from "react-icons/io5";

function MapPin({ lat, lng }: { lat: number, lng: number}) {
  return <Icon as={IoPinSharp} boxSize={12} color={"red"} />
}

export interface LocationMapProps {
  lat: number
  lng: number
}

export function LocationMap({ lat, lng }: LocationMapProps) {
  const defaultProps = {
    center: {
      lat,
      lng,
    },
    zoom: 7,
  }

  return (
    <Box style={{ height: '40vh', width: '100%' }}>
      {!googleMapsKey ? (
        <Center>
          <Text>
            We're are unable to display a map for this location without a Google
            Maps API Key. Please add your key in settings.
          </Text>
        </Center>
      ) : (
        <GoogleMapReact
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          yesIWantToUseGoogleMapApiInternals
          bootstrapURLKeys={{ key: googleMapsKey }}
          
        >
          <MapPin 
          lat={lat}
          lng={lng}
         />
        </GoogleMapReact>
      )}
    </Box>
  )
}
