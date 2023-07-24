import { Flex, Text } from "@chakra-ui/react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { FC, useMemo } from "react";
import "./Map.css";

export const ShopsMap: FC = () => {
    const lat = 13.7378934;
    const lng = 100.5187621;
    const numOfShops = Math.ceil(Math.random() * 10);
    const coords: { lat: number; lng: number }[] = [];
    for (let i = 0; i < numOfShops; i++) {
        const varLat =
            Math.random() * 0.01 * (Math.round(Math.random()) ? 1 : -1);
        const varLng =
            Math.random() * 0.01 * (Math.round(Math.random()) ? 1 : -1);
        console.log(varLat, varLng);
        coords.push({ lat: lat + varLat, lng: lng + varLng });
    }
    const { isLoaded } = useLoadScript({
        googleMapsApiKey:
            process.env.NEXT_PUBLIC_REACT_APP_GOOGLE_API_KEY ?? "",
    });
    const center = useMemo(() => ({ lat, lng }), []);
    return (
        <Flex
            w="100%"
            h="40vh"
            justify="center"
            mt={5}
            px={{ base: "0", lg: "10%" }}
        >
            {!isLoaded ? (
                <Text>Loading...</Text>
            ) : (
                <GoogleMap
                    mapContainerClassName="map"
                    center={center}
                    zoom={14}
                >
                    {coords.map((c, index) => (
                        <Marker
                            key={index}
                            position={{ lat: c.lat, lng: c.lng }}
                        />
                    ))}
                </GoogleMap>
            )}
        </Flex>
    );
};
