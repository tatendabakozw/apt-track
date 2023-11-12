import DashboardLayout from '@layouts/DashboardLayout';
import React, { useState } from 'react';
import SingleBus from '@components/bus-components/SingleBus';
import { data } from '@utils/data';
import FleetSearch from '@components/inputs/FleetSearch';
import FleetFilter from '@components/filter/FleetFilter';

const Fleet = () => {
  const [query, setQuery] = useState('');
  return (
    <DashboardLayout>
      <div className="flex flex-col w-full h-full flex-1 bg-primary py-2">
        <div className="max-w-7xl w-full mx-auto flex-1 px-2  grid grid-cols-2  gap-2 ">
          <div className="col-span-1 bg-slate-100/70 dark:bg-slate-800 p-2 rounded-xl space-y-4">
            <div className="flex flex-row items-center w-full space-x-4">
              <FleetSearch value={query} setValue={setQuery} />
              <FleetFilter />
            </div>
            {data.buses.map((item) => (
              <SingleBus
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
          <div className="col-span-1 bg-slate-100/70 dark:bg-slate-800 p-2 rounded-xl">
            sdafds
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Fleet;
