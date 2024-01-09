import DashboardLayout from '@layouts/DashboardLayout';
import React from 'react';

const index = () => {
  return (
    <DashboardLayout>
      <div className="max-w-7xl w-full mx-auto">
        <div className="flex flex-row justify-between py-12">
          <div className="flex flex-col space-y-2">
            <p className="heading-text font-bold text-3xl">
              Settings <span className="text-secondary-original"></span>
            </p>
            <p className="text-sm font-medium text-slate-500">
              Configure your dashboard and other info from here
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default index;
