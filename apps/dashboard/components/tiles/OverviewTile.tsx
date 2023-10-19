/* eslint-disable @typescript-eslint/ban-types */
import React, { ReactElement } from 'react';

type Props = {
  heading: String,
  icon: ReactElement,
  count: number,
  details: String
};

const OverviewTile = (props: Props) => {
  return (
    <div className="flex flex-col space-y-2 main-border p-4 rounded">
      <div className="flex flex-row items-center w-full main-text justify-between">
        <p className='text-sm font-semibold mb-2'>{props.heading}</p>
        <p>
          {props.icon}
        </p>
      </div>
      <p className='text-2xl font-bold heading-text'>{props.count}</p>
      <p className='text-xs text-slate-500 dark:text-slate-500'>{props.details}</p>
    </div>
  );
};

export default OverviewTile;