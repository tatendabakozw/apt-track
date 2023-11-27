import DashboardLayout from '@layouts/DashboardLayout';
import React, { ReactNode, useState } from 'react';
import SingleBus from '@components/bus-components/SingleBus';
import { data } from '@utils/data';
import FleetSearch from '@components/inputs/FleetSearch';
import FleetFilter from '@components/filter/FleetFilter';
import Map from 'react-map-gl';
import {
  ArrowUpOnSquareStackIcon,
  GlobeAltIcon,
  PlusIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import { ClockIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

const Fleet = () => {
  const [query, setQuery] = useState('');
  return (
    <DashboardLayout>
      <div className="flex flex-col w-full h-full flex-1 bg-primary py-2">
        <div className="max-w-7xl w-full mx-auto flex-1 px-2  grid grid-cols-2  gap-2 ">
          <div className="col-span-1 flex flex-col w-full">
            <div className=" bg-slate-100/70 dark:bg-slate-800 p-2 rounded-xl space-y-4">
              <div className="flex flex-row items-center w-full space-x-4">
                <FleetSearch value={query} setValue={setQuery} />
                <FleetFilter />
                <Link href={'/fleet/add-bus'} className="flex flex-row items-center space-x-2 bg-primary p-4 rounded-full">
                  <PlusIcon height={20} width={20} className="main-text" />
                </Link>
              </div>
              {data.buses.map((item) => (
                <SingleBus
                  _id={item._id}
                  plate={item.plate}
                  progress={item.progress}
                  name={item.driver}
                  icon="/bus.png"
                  user_type={'driver'}
                  from={item.from}
                  cargo_type="passengers"
                  to={item.to}
                  distance_left={item.distance_left}
                  key={item._id}
                />
              ))}
            </div>
          </div>
          <div className="col-span-1 flex relative bg-slate-100/70 dark:bg-slate-800 p-2 rounded-xl overflow-hidden items-center justify-center">
            <div className="z-50 top-5 mx-4 absolute bg-primary rounded-full flex-1 grid grid-cols-4 gap-12 p-2">
              <HeadingItem
                heading="Distance"
                Icon={ArrowUpOnSquareStackIcon}
                details={'4.2/12.7km'}
              />
              <HeadingItem
                heading="CurrentSpeed"
                Icon={GlobeAltIcon}
                details={'4.2/12.7km'}
              />
              <HeadingItem
                heading="Estimated"
                Icon={ClockIcon}
                details={'2.15pm'}
              />
              <HeadingItem
                heading="Driver"
                Icon={UserIcon}
                details={'tatenda'}
              />
            </div>
            <Map
              mapboxAccessToken="pk.eyJ1IjoidGF0ZW5kYXp3IiwiYSI6ImNsbTdpZGt2NTAweGsza3MyODd5Z20za2UifQ.naBorxMyGM2ewbWQROY4OA"
              initialViewState={{
                longitude: -122.4,
                latitude: 37.8,
                zoom: 14,
              }}
              style={{
                flex: 1,
                height: '100%',
                width: '100%',
                borderRadius: 10,
              }}
              mapStyle="mapbox://styles/mapbox/streets-v9"
            />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

interface HeadingItemProps {
  heading: string;
  details: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Icon: any;
}

const HeadingItem = (props: HeadingItemProps) => {
  return (
    <div className="col-span-1 flex flex-row items-center space-x-2">
      <props.Icon height={24} width={24} className="light-text" />
      <div className="flex flex-col">
        <p className="text-xs text-slate-500 font-medium">{props.heading}</p>
        <p className="text-slate-700 text-xs font-semibold">{props.details}</p>
      </div>
    </div>
  );
};

export default Fleet;
