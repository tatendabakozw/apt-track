import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import React from 'react';

type Props = {
  value: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setValue: React.Dispatch<React.SetStateAction<any>>;
};

const FleetSearch = (props: Props) => {
  return (
    <div className="flex flex-row items-center bg-primary flex-1 px-4 py-2 rounded-full space-x-2">
      <MagnifyingGlassIcon height={16} width={16} className="light-text" />
      <input
        type="text"
        value={props.value}
        onChange={(e) => props.setValue(e.target.value)}
        placeholder="search for truck"
        className="px-2 flex-1 light-text outline-none border-none bg-primary text-sm py-2"
      />
    </div>
  );
};

export default FleetSearch;
