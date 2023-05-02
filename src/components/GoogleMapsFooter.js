import { React, useState, useRef } from "react";
import {
  GoogleMap,
  useLoadScript,
  MarkerF,
  InfoWindowF,
} from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "240px",
};

const center = {
  lat: 31.3695,
  lng: 74.1768,
};

const GoogleMapsFooter = () => {
  const [currentCenter, setCurrentCenter] = useState(center);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAo-Ei3qi2jEvM2cOgBBeXfkHtNC5zehr4",
  });
  const mapRef = useRef();

  const onLoad = (map) => {
    if (map) {
      setCurrentCenter(map.getCenter().toJSON());
    }
  };

  const onCenterChanged = (map) => {
    if (map) {
      setCurrentCenter(map.getCenter().toJSON());
    }
  };

  return isLoaded ? (
    <GoogleMap
      ref={mapRef}
      mapContainerStyle={mapContainerStyle}
      center={currentCenter}
      zoom={14}
      onLoad={onLoad}
      onCenterChanged={onCenterChanged}
    >
      <MarkerF position={{ lat: 31.3695, lng: 74.1768 }}>
        <InfoWindowF position={{ lat: 31.3695, lng: 74.1768 }}>
          <div>
            <p className="text-sm mx-2 underline font-medium cursor-pointer">
              Our Office
            </p>
          </div>
        </InfoWindowF>
      </MarkerF>
    </GoogleMap>
  ) : (
    "Loading map..."
  );
};

export default GoogleMapsFooter;
