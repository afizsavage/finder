import React from "react";
import GoogleMapReact from "google-map-react";
import { BsHouse } from "react-icons/bs";

const LocationPin = ({ text, lat, lng }) => (
  <div className=" bg-teal-500 h-12 w-12 items-center justify-center inline-flex rounded-full">
    <span className="text-xl inline-block mx-auto my-auto text-white font-bold">
      <BsHouse />{" "}
    </span>
  </div>
);

const defaultMapOptions = {
  streetViewControl: true,
  fullscreenControl: false,
  streetViewControlOptions: {
    position: 3,
  },
  zoomControlOptions: {
    position: 3,
  },
};

const PropertyLocation = ({ location, zoomLevel }) => {
  return (
    <div className="map mb-12 ">
      <h2 className="text-2xl font-semibold text-gray-800 mb-5 mt-10 ">
        Location
      </h2>

      <div className="w-100" style={{ height: "70vh" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyD0NxdGbmSHZWWI1T5zYP6nCq_bxX2t110" }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
          options={{
            ...defaultMapOptions,
          }}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default PropertyLocation;
