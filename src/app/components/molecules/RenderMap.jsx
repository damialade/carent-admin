import {
  GoogleMap,
  Marker,
  useLoadScript,
  InfoWindow,
} from "@react-google-maps/api";
import Image from "next/image";
import { useState } from "react";

const RenderMap = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_API_KEY || "",
  });
  const [mapRef, setMapRef] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [infoWindowData, setInfoWindowData] = useState();

  const markers = [
    {
      type: "Nissan GT-R",
      num: "B1234ABC",
      customer: "Chris Richards",
      phone: "08512536737",
      date: "11 Jan 2023",
      lat: 18.5204,
      lng: 73.8567,
    },
    {
      type: "Mercedez G-Wagon",
      num: "B103ABD",
      customer: "Andrew Boakye",
      phone: "08162330937",
      date: "09 Sep 2023",
      lat: 18.5314,
      lng: 73.8446,
    },
    {
      type: "Toyota Corolla",
      num: "B1287ABJ",
      customer: "Charis Rards",
      phone: "08012536737",
      date: "11 Jun 2024",
      lat: 18.5642,
      lng: 73.7769,
    },
  ];

  const onMapLoad = (map) => {
    setMapRef(map);
    const bounds = new google.maps.LatLngBounds();
    markers?.forEach(({ lat, lng }) => bounds.extend({ lat, lng }));
    map.fitBounds(bounds);
  };

  const handleMarkerClick = (
    id,
    lat,
    lng,
    type,
    num,
    customer,
    phone,
    date
  ) => {
    mapRef?.panTo({ lat, lng });
    setInfoWindowData({ id, type, num, customer, phone, date });
    setIsOpen(true);
  };
  const customMarker = {
    path: "M29.395,0H17.636c-3.117,0-5.643,3.467-5.643,6.584v34.804c0,3.116,2.526,5.644,5.643,5.644h11.759   c3.116,0,5.644-2.527,5.644-5.644V6.584C35.037,3.467,32.511,0,29.395,0z M34.05,14.188v11.665l-2.729,0.351v-4.806L34.05,14.188z    M32.618,10.773c-1.016,3.9-2.219,8.51-2.219,8.51H16.631l-2.222-8.51C14.41,10.773,23.293,7.755,32.618,10.773z M15.741,21.713   v4.492l-2.73-0.349V14.502L15.741,21.713z M13.011,37.938V27.579l2.73,0.343v8.196L13.011,37.938z M14.568,40.882l2.218-3.336   h13.771l2.219,3.336H14.568z M31.321,35.805v-7.872l2.729-0.355v10.048L31.321,35.805",
    fillColor: "#1BB652",
    fillOpacity: 2,
    strokeWeight: 1,
    rotation: 0,
    scale: 1,
  };

  return (
    <div className="map">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          onLoad={onMapLoad}
          onClick={() => setIsOpen(false)}
          zoom={10}
        >
          {markers.map(({ type, num, customer, phone, date, lat, lng }, id) => (
            <Marker
              key={id}
              position={{ lat, lng }}
              icon={customMarker}
              onClick={() => {
                handleMarkerClick(
                  id,
                  lat,
                  lng,
                  type,
                  num,
                  customer,
                  phone,
                  date
                );
              }}
            >
              {isOpen && infoWindowData?.id === id && (
                <InfoWindow
                  onCloseClick={() => {
                    setIsOpen(false);
                  }}
                >
                  <div className="w-40 space-y-1">
                    <div className="flex justify-center">
                      <Image
                        src="/images/car.png"
                        alt="Car Image"
                        width={80}
                        height={24}
                        priority
                      />
                    </div>
                    <h3 className="font-medium">{infoWindowData.type}</h3>
                    <div className="flex justify-between">
                      <p className="text-app-grey">Number</p>
                      <p className="font-medium">: {infoWindowData.num}</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-app-grey">Customer</p>
                      <p className="font-medium">: {infoWindowData.customer}</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-app-grey">Phone</p>
                      <p className="font-medium">: {infoWindowData.phone}</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-app-grey">Due Date</p>
                      <p className="font-medium">: {infoWindowData.date}</p>
                    </div>
                  </div>
                </InfoWindow>
              )}
            </Marker>
          ))}
        </GoogleMap>
      )}
    </div>
  );
};

export default RenderMap;
