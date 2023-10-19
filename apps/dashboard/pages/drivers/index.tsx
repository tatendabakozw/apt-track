/* eslint-disable @typescript-eslint/ban-types */
import DriversTable from '../../components/tables/DriversTable';
import DashboardLayout from '../../layouts/DashboardLayout';
import React from 'react';

type Props = {};

const Drivers = (props: Props) => {
  const drivers = [
    {
      name: 'tatenda bako',
      phone: '0771445411',
      bus: 'AE34',
      route: 'karoi-masvingo',
      status: 'departed',
      _id: 'iam-an-id'
    },
    {
        name: 'tatenda bako',
        phone: '0771445411',
        bus: 'AE34',
        route: 'karoi-masvingo',
        status: 'departed',
        _id: 'iam-an-id'
      },
  ];
  return (
    <DashboardLayout>
      <div className="flex w-full max-w-7xl mx-auto text-main flex-col space-y-8 md:p-8 p-4 min-h-screen">
        <p className="heading-text text-3xl font-bold">Drivers</p>
        <DriversTable drivers={drivers} />
      </div>
    </DashboardLayout>
  );
};

export default Drivers;
