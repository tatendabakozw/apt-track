import { PlusIcon } from '@heroicons/react/24/outline';
import DashboardLayout from '@layouts/DashboardLayout';
import Link from 'next/link';
import React from 'react';

const Routes = () => {
  return (
    <DashboardLayout>
      <div className="max-w-7xl w-full mx-auto px-4">
        <div className="flex flex-row justify-between py-12">
          <div className="flex flex-col space-y-2">
            <p className="heading-text font-bold text-3xl">
              Routes <span className="text-secondary-original">List</span>
            </p>
            <p className="text-sm font-medium text-slate-500">
              Manage all your routes
            </p>
          </div>
          <Link href={'/routes/add-route'} className="flex flex-col">
            <div className="flex flex-row items-center space-x-2 text-white bg-primary-original p-2 rounded">
              <PlusIcon height={16} width={15} />
              <p className="text-sm font-medium">Add route</p>
            </div>
          </Link>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Routes;
