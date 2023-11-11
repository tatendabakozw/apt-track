import OverviewTile from '../../components/tiles/OverviewTile';
import OverviewGraph from '../../components/graphs/OverviewGraph';
import EventItem from '../../components/event-item/EventItem';
import OverviewLayout from '../../layouts/OverviewLayout';
import {
  StopCircleIcon,
  TruckIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import { useContext } from 'react';
import { Store } from '@context/Store';
import { ContextType } from '@utils/types';

const Overview = () => {
  const {state} = useContext<ContextType>(Store)
  const {userInfo} = state
  const over_view_tiles = [
    {
      name: 'Drivers',
      count: 40,
      detail: 'number of drivers operating',
      icon: <UserGroupIcon height={16} width={16} />,
    },
    {
      name: 'Bus Stops',
      count: 300,
      detail: 'number of stops registered',
      icon: <StopCircleIcon height={16} width={16} />,
    },
    {
      name: 'Buses',
      count: 12,
      detail: 'number of buses operating',
      icon: <TruckIcon height={16} width={16} />,
    },
  ];

  const events = [
    { heading: 'Bus EAD4', details: 'Bus just left chinhoyi terminal' },
    { heading: 'Bus ER33', details: 'We suspect overspeeding around banket' },
    { heading: 'Bus TY8B', details: 'Is haaving a very profitable day today' },
  ];

  console.log(userInfo)

  return (
    <OverviewLayout heading="Overview">
      <div className="text-main flex-col space-y-8">
        <div className="grid md:grid-cols-4 grid-cols-1 gap-8">
          {over_view_tiles.map((item, index) => (
            <OverviewTile
              heading={item.name}
              icon={item.icon}
              details={item.detail}
              count={item.count}
              key={index}
            />
          ))}
        </div>
        <div className="grid md:grid-cols-5 grid-cols-1 gap-4 flex-1 h-96">
          <div className=" main-border col-span-3 p-4 rounded-lg">
            <p className="heading-small text-3xl font-bold pb-4">Overview</p>
            <div className="flex">
              <OverviewGraph />
            </div>  
          </div>
          <div className=" main-border col-span-2 p-4 rounded-lg">
            <p className="heading-small text-3xl font-bold pb-1">
              Recent Events
            </p>
            <p className="text-slate-400 dark:text-slate-500 text-sm font-semibold pb-4">
              No unusual casualties
            </p>
            <div className="flex-col space-y-4">
              {events.map((event, index) => (
                <EventItem
                  heading={event.heading}
                  details={event.details}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </OverviewLayout>
  );
};

export default Overview;
