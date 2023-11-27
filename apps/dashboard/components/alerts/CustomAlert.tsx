import React from 'react';

type Props = {
  type: string;
  message: string;
};

const CustomAlert = (props: Props) => {
  return (
    <div
      className={`${
        props.type === 'error' || props.type === 'err'
          ? 'bg-red-200 text-red-600 '
          : 'text-green-600 bg-green-200 '
      } p-3 text-sm font-medium text-center rounded`}
    >
      {props.message}
    </div>
  );
};

export default CustomAlert;
