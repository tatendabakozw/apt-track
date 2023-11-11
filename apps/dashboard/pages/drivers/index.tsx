/* eslint-disable @typescript-eslint/ban-types */
import DriversTable from '@components/tables/DriversTable';
import { PlusIcon } from '@heroicons/react/24/outline';
import DashboardLayout from '@layouts/DashboardLayout';
import Link from 'next/link';
import React from 'react';

type Props = {};

const Drivers = (props: Props) => {
  return (
    <DashboardLayout>
      <div className="flex w-full max-w-7xl mx-auto text-main flex-col md:px-8 px-4 min-h-screen">
        <div className="flex flex-row justify-between py-12">
          <div className="flex flex-col space-y-2">
            <p className="text-zinc-900 font-bold text-3xl">
              Drivers <span className="text-secondary-original">List</span>
            </p>
            <p className="text-sm font-medium text-slate-500">
              Manage all your drivers
            </p>
          </div>
          <Link href={'/drivers/add-driver'} className="flex flex-col">
            <div className="flex flex-row items-center space-x-2 text-white bg-primary-original p-2 rounded">
              <PlusIcon height={16} width={15} />
              <p className="text-sm font-medium">Add drivers</p>
            </div>
          </Link>
        </div>
        <DriversTable />
      </div>
    </DashboardLayout>
  );
};

export default Drivers;
