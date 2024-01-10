/* eslint-disable @typescript-eslint/no-explicit-any */
import LabeledInput from '@components/inputs/LabeledInput';
import DashboardLayout from '@layouts/DashboardLayout';
import React, { useState } from 'react';
import Map, { GeolocateControl, Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MapPinIcon } from '@heroicons/react/20/solid';

const AddRoute = () => {
  const [name, setName] = useState('');
  const [clickedLocation, setClickedLocation] = useState<any>(null);
  const handleMapClick = (event:any) => {
    const clickedCoordinates = {
      latitude: event.lngLat.lat,
      longitude: event.lngLat.lng,
    };

    // console.log(clickedCoordinates)

    setClickedLocation(clickedCoordinates);
  };

  console.log(clickedLocation?.latitude)

  return (
    <DashboardLayout>
      <div className="max-w-7xl w-full mx-auto px-4 py-8 space-y-8">
        <LabeledInput
          value={name}
          placeholder="give a name to your route"
          setValue={setName}
          label="Route name"
        />
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col space-y-2">
            <p className="text-sm font-medium text-slate-700">
              Departure location
            </p>
            <div className="flex">
              <div className=" bg-slate-200 relative rounded overflow-hidden">
                <Map
                  mapboxAccessToken="pk.eyJ1IjoidGF0ZW5kYXp3IiwiYSI6ImNsbTdpZGt2NTAweGsza3MyODd5Z20za2UifQ.naBorxMyGM2ewbWQROY4OA"
                  initialViewState={{
                    longitude: -122.4,
                    latitude: 37.8,
                    zoom: 14,
                  }}
                  style={{ width: 600, height: 400 }}
                  mapStyle="mapbox://styles/mapbox/streets-v9"
                >
                  <GeolocateControl
                    positionOptions={{ enableHighAccuracy: true }}
                    trackUserLocation={true}
                  />
                </Map>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <p className="text-sm font-medium text-slate-700">
              Destination location
            </p>
            <div className="flex">
              <div className=" bg-slate-200 relative rounded overflow-hidden">
                <Map
                  mapboxAccessToken="pk.eyJ1IjoidGF0ZW5kYXp3IiwiYSI6ImNsbTdpZGt2NTAweGsza3MyODd5Z20za2UifQ.naBorxMyGM2ewbWQROY4OA"
                  initialViewState={{
                    longitude: -122.4,
                    latitude: 37.8,
                    zoom: 14,
                  }}
                  onClick={handleMapClick}
                  style={{ width: 600, height: 400 }}
                  mapStyle="mapbox://styles/mapbox/streets-v9"
                >
                  <GeolocateControl
                    positionOptions={{ enableHighAccuracy: true }}
                    trackUserLocation={true}
                  />
                  {clickedLocation && (
                    <Marker
                      latitude={clickedLocation?.latitude}
                      longitude={clickedLocation?.longitude}
                    >
                      <MapPinIcon height={20} width={20} />
                    </Marker>
                  )}

                  {clickedLocation && (
                    <Popup
                      latitude={clickedLocation.latitude}
                      longitude={clickedLocation.longitude}
                      onClose={() => setClickedLocation(null)}
                    >
                      <div>Clicked Location Information</div>
                    </Popup>
                  )}
                </Map>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AddRoute;
