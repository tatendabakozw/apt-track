import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';
import React from 'react';

const FleetFilter = () => {
  return (
    <button className="flex flex-row items-center space-x-2 bg-primary px-6 py-4 rounded-full">
      <AdjustmentsHorizontalIcon
        height={20}
        width={20}
        className="main-text"
      />
      <p className="text-sm font-medium main-text">Filters</p>
    </button>
  );
};

export default FleetFilter;
